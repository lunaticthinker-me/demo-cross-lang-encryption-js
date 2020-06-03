#!/bin/bash

unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     MACHINE_OS=Linux;;
    Darwin*)    MACHINE_OS=Mac;;
    CYGWIN*)    MACHINE_OS=Windows;;
    MINGW*)     MACHINE_OS=Windows;;
    *)          MACHINE_OS="UNKNOWN:${unameOut}"
esac

RUNNING_PATH=$(pwd)


# Uncomment if you want to check only commited code
STAGED_GO_FILES=$(git diff --cached --name-only | grep ".go$")
# STAGED_GO_FILES=$(git diff-index --check --cached HEAD -- | grep ".go$")
# Uncomment if you want to check the entire code
# STAGED_GO_FILES=$(find . -iname "*.go")

# Uncomment this if you want to check changed code (without git commit)
# STAGED_GO_FILES=$(git diff --name-only | grep ".go$")

# DO NOT USE THIS FOR DEV
echo $@ | grep "\-\-all" > /dev/null && STAGED_GO_FILES=$(find . -iname "*.go")

if [[ "$STAGED_GO_FILES" = "" ]]; then
    exit 0
fi

GOLINT=$GOPATH/bin/golint
GOLANGCILINT=$GOPATH/bin/golangci-lint
GOIMPORTS=$GOPATH/bin/goimports
GOCYCLO=$GOPATH/bin/gocyclo
GOCRITIC=$GOPATH/src/github.com/go-critic/go-critic/gocritic

# Check for golint
if [[ ! -x "$GOLINT" ]]; then
    printf ">> \e[33;31mPlease install golint\e[m (go get -u golang.org/x/lint/golint)"
    exit 1
fi

# Check for goimports
if [[ ! -x "$GOIMPORTS" ]]; then
    printf "\t\e[33;31mPlease install goimports\e[m (go get golang.org/x/tools/cmd/goimports)"
    exit 1
fi

# Check for gocyclo
if [[ ! -x "$GOCYCLO" ]]; then
    printf "\t\e[33;31mPlease install gocyclo\e[m (go get -v github.com/fzipp/gocyclo/...)"
    exit 1
fi

# Check for gocritic
# if [[ ! -x "$GOCRITIC" ]] && [[ $MACHINE_OS != "Windows" ]]; then
if [[ ! -x "$GOCRITIC" ]] && [[ "$TRAVIS_OS_NAME" = "" ]]; then
    printf "\t\e[33;31mPlease install go-critic\e[m (go get -v github.com/go-lintpack/lintpack/... && go get -v github.com/go-critic/go-critic/...)"
    exit 1
fi

PASS=true

for FILE in $STAGED_GO_FILES; do
    printf ">> \e[33;32m$FILE\e[m"

    if [[ ! -f $FILE ]]; then
        printf ">> \e[33;32m$FILE\033[93m missing. Probably deleted. Will skip\e[m\n"
        echo
        continue
    else
        printf "\n"
    fi

    #
    # Formatting
    #

    # Run gofmt on the staged file
    COMMAND="gofmt -l -w $FILE"
    printf "\t\e[33;90m$COMMAND\e[m ... "
    $COMMAND
    printf "\e[33;32mOK\e[m\n"

    # Run goimports on the staged file
    COMMAND="$GOIMPORTS -w $FILE"
    printf "\t\e[33;90m%s\e[m ... " "$COMMAND"
    # printf '\e[1;34m%-6s\e[m' "This is text"
    $COMMAND
    printf "\e[33;32mOK\e[m\n"

    #
    # Linting
    #

    # Run golint on the staged file and check the exit status
    COMMAND="$GOLINT -set_exit_status $FILE"
    printf "\t\e[33;90m%s\e[m ... " "$COMMAND"
    $COMMAND &> /tmp/__pre_commit_go__
    if [[ $? == 1 ]]; then
        printf "\e[33;31mFAILURE!\e[m\n"
        printf "\e[33;31m$(cat /tmp/__pre_commit_go__)\e[m\n"
        PASS=false
    else
        printf "\e[33;32mOK\e[m\n"
    fi

    # Run govet on the staged file and check the exit status
    COMMAND="go vet $FILE"
    printf "\t\e[33;90m$COMMAND\e[m ... "
    $COMMAND &> /tmp/__pre_commit_go__
    if [[ $? == 1 ]]; then
        printf "\e[33;31mFAILURE!\e[m\n"
        printf "\e[33;31m$(cat /tmp/__pre_commit_go__)\e[m\n"
        PASS=false
    else
        printf "\e[33;32mOK\e[m\n"
    fi

    # # Run golangci-lint on the staged file and check the exit status
    COMMAND="$GOLANGCILINT run $FILE"
    printf "\t\e[33;90m%s\e[m ... " "$COMMAND"
    if [[ "$MACHINE_OS" != "Windows" ]]; then
        $COMMAND #&> /tmp/__pre_commit_go__
        if [[ $? == 1 ]]; then
            printf "\e[33;31mFAILURE!\e[m\n"
            printf "\e[33;31m$(cat /tmp/__pre_commit_go__)\e[m\n"
            PASS=false
        else
            printf "\e[33;32mOK\e[m\n"
        fi
    else
        printf "\e[33;93m%s\e[m\n" "Skipping on Windows"
    fi

    #
    # Analysis
    #

    # Run gocyclo on the staged file and check the exit status
    COMMAND="$GOCYCLO -over=15 $FILE"
    printf "\t\e[33;90m%s\e[m ... " "$COMMAND"
    $COMMAND &> /tmp/__pre_commit_go__
    if [[ $? == 1 ]]; then
        printf "\e[33;31mFAILURE!\e[m\n"
        printf "\e[33;31m$(cat /tmp/__pre_commit_go__)\e[m\n"
        PASS=false
    else
        printf "\e[33;32mOK\e[m\n"
    fi

    # Run gocritic on the staged file and check the exit status
    COMMAND="$GOCRITIC check $FILE"
    printf "\t\e[33;90m%s\e[m ... " "$COMMAND"
    if [[ "$TRAVIS_OS_NAME" = "" ]]; then
        echo $COMMAND &> /tmp/__pre_commit_go__
        if [[ $? == 1 ]]; then
            printf "\e[33;31mFAILURE!\e[m\n"
            printf "\e[33;31m$(cat /tmp/__pre_commit_go__)\e[m\n"
            PASS=false
        else
            printf "\e[33;32mOK\e[m\n"
        fi
    else
        printf "\e[33;93m%s\e[m\n" "Skipping on Travis"
    fi

    #
    # Unit Testing
    #
    echo $FILE | grep "_test.go" &> /dev/null
    if [[ $? -eq 0 ]]; then
        # printf "\e[33;31mUnit testing has been disabled until SMB\\Guest user issues is solved.\e[m\n"
        cd $(dirname $FILE)
        # Run gocritic on the staged file and check the exit status
        COMMAND="go test -tags=unit -timeout 30s -short -v"
        printf "\t\e[33;90m$COMMAND\e[m ... "
        $COMMAND &> /tmp/__pre_commit_go__
        if [[ $? != 0  ]]; then
            printf "\e[33;31mFAILURE!\e[m\n"
            printf "\e[33;31m$(cat /tmp/__pre_commit_go__)\e[m\n"
            PASS=false
        else
            printf "\e[33;32mOK\e[m\n"
        fi
        cd $RUNNING_PATH
    fi


    #
    # Re-add changed file
    #
    if $PASS; then
        git add $FILE
    fi

    # exit 0
done

echo
echo

if ! $PASS; then
    printf "\033[0;30m\e[33;31mCOMMIT FAILED\e[m\n"
    exit 1
else
    printf "\033[0;30m\033[42mCOMMIT SUCCEEDED\e[m\n"
fi

echo
echo

exit 0
