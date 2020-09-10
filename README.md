# Encrypt/Decrypt Example

[![TravisCI](https://travis-ci.org/lunaticthinker-me/demo-cross-lang-encryption-js.svg?branch=master)](https://travis-ci.org/lunaticthinker-me/demo-cross-lang-encryption-js)
![JSCPD](.jscpd/jscpd-badge.svg?raw=true)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/lunaticthinker-me/demo-cross-lang-encryption-js/issues)

<!-- [![CircleCI](https://circleci.com/gh/lunaticthinker-me/demo-cross-lang-encryption-js.svg?style=shield)](https://circleci.com/gh/lunaticthinker-me/demo-cross-lang-encryption-js) -->

[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=lunaticthinker-me_demo-cross-lang-encryption-js&metric=alert_status)](https://sonarcloud.io/dashboard?id=lunaticthinker-me_demo-cross-lang-encryption-js)
[![SonarCloud Coverage](https://sonarcloud.io/api/project_badges/measure?project=lunaticthinker-me_demo-cross-lang-encryption-js&metric=coverage)](https://sonarcloud.io/component_measures/metric/coverage/list?id=lunaticthinker-me_demo-cross-lang-encryption-js)
[![SonarCloud Bugs](https://sonarcloud.io/api/project_badges/measure?project=lunaticthinker-me_demo-cross-lang-encryption-js&metric=bugs)](https://sonarcloud.io/component_measures/metric/reliability_rating/list?id=lunaticthinker-me_demo-cross-lang-encryption-js)
[![SonarCloud Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=lunaticthinker-me_demo-cross-lang-encryption-js&metric=vulnerabilities)](https://sonarcloud.io/component_measures/metric/security_rating/list?id=lunaticthinker-me_demo-cross-lang-encryption-js)

<!--
[![Donate to this project using Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://patreon.com/dragoscirjan)
[![Donate to this project using Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UMMN8JPLVAUR4&source=url)
[![Donate to this project using Flattr](https://img.shields.io/badge/flattr-donate-yellow.svg)](https://flattr.com/profile/balupton)
[![Donate to this project using Liberapay](https://img.shields.io/badge/liberapay-donate-yellow.svg)](https://liberapay.com/dragoscirjan)
[![Donate to this project using Thanks App](https://img.shields.io/badge/thanksapp-donate-yellow.svg)](https://givethanks.app/donate/npm/badges)
[![Donate to this project using Boost Lab](https://img.shields.io/badge/boostlab-donate-yellow.svg)](https://boost-lab.app/dragoscirjan/badges)
[![Donate to this project using Buy Me A Coffee](https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg)](https://buymeacoffee.com/balupton)
[![Donate to this project using Open Collective](https://img.shields.io/badge/open%20collective-donate-yellow.svg)](https://opencollective.com/dragoscirjan)
[![Donate to this project using Cryptocurrency](https://img.shields.io/badge/crypto-donate-yellow.svg)](https://dragoscirjan.me/crypto)
[![Donate to this project using Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://dragoscirjan.me/paypal)
[![Buy an item on our wishlist for us](https://img.shields.io/badge/wishlist-donate-yellow.svg)](https://dragoscirjan.me/wishlist)
-->

- [Encrypt/Decrypt Example](#encryptdecrypt-example)
  - [Getting Started](#getting-started)
    - [Prereqiusites / Dependencies](#prereqiusites--dependencies)
    - [Installation](#installation)
    - [Development](#development)
      - [Requirements](#requirements)
        - [For Windows](#for-windows)
        - [For Linux/Unix/OSX](#for-linuxunixosx)
    - [Testing](#testing)
    - [Running](#running)
  - [Authors](#authors)
  - [Issues / Support](#issues--support)

<!-- /TOC -->

## Getting Started

### Prereqiusites / Dependencies

Have [openssl]() installed.

### Installation

```bash
git clone https://github.com/lunaticthinker-me/demo-cross-lang-encryption-js
```

### Development

#### Requirements

- Please install [NodeJs](https://nodejs.org/en/download/). We support version 1.13.x and 1.14.x
- Please instal a GoLang IDE
  - [Visual Studio Code](https://code.visualstudio.com/) with at least [ITMCDev NodeJs Extension Pack](https://marketplace.visualstudio.com/items?itemName=itmcdev.node-extension-pack)
  - [Jetbrains Webstorm](https://www.jetbrains.com/webstorm/)

##### For Windows

- Please install [git-scm](https://git-scm.com/download/win) tool.

##### For Linux/Unix/OSX

- Please install `git`

```bash
sudo apt-get install git -y
```

### Testing

Run unit tests using `npm run test`.

### Running

Please run `npm start`

Demo output:

```
AES Encrypted Values:
CFB 128 => GigmhLJurG5BhbKZ/4Rbh52d+uv8HoBBFl55d0QzKNQ=
CFB 192 => wTbvR63MrpuZmfMS0//0nbdQseZnSC2vm61/rUPVbnc=
CFB 256 => iDXB861O/V3Cfn9Mexrn1a4hOYxmXrsxcWExy+utt+o=
CBC 128 => hsub5jmTAFsBBy/1GyNZi/tI35lJX6u4E1BuhoD5t/NH8lvUJarhVE8lCIkiF4g2
CBC 192 => wLzKcST0ltRik0/lB4+wTz0BOQLamK9ZXtevtP89mO5IIXKg3kxJvPvyroFw4F05
CBC 256 => KO2RwoX8cd3ydOe5E6/kIAB2o40ILhBLjkToAy8pLRXhNj25cFx0bSO5ThXHkTpN

RSA Encrypted Values:
HDIXtNnbJjaxfCKFEmecq2LL32nDmzn+p5FsZZZYtDUKrf6VPAFI2iNxXVlYcJjoJ41z70zRQg1+Y28bfAvlplqCRV1REXDsVMWWTq02g/oJTd2bwB/0ly3lb6tEFbCK6JQ9WBLU4LcX6qgZsJZWJIWhBimNFA+wEIwFxZcR5csqg3/YDdnVafD8ydywsQPp7pQ3FbFseHt15nNJ9Hg+jbbjb3n9TAeJ0J8BJ0q7ocd9tbC46VaviaAI2tyF9sarMdR2AdywwrLzCaJk1a1UibCCvVH58H+08utb/RjvWj/VU1UfDdvmeoinxQKLVbzZDfkGmctDE1AcOW4CJ0+Gzw==

X509 Encrypted Values:
Hsd/6z3pVxLjPD0wlklknb+EJWC2guY83jo44ItD3IVxrpkgu9Sj1Rdrpq/QHpk3Add3cYaV1sA1eUFQ6jz9c0nTyFNihAG1tp86q9j9+bSk9gVgS8hXmtHTEyjsLo96aNmiyVelB7zR6f9oOGw5gmsxSh+O+EoBAnoPr2+dFiseMKsvRDICqacN+x58DooM4H3Kx7kZRA8nUlnHCTRb8/Odge9J2akBX9MNVhsHoZbDzWEq0CopVSBgOUXpTXwqtxW5bJBgr+hc9w1k8wUZug61J5qI6ASw6iigFdPxoXUzrxGOZa8V3IEbaLGyUli1dWayNgdLToWEtBdRYGysSw==
```

## Authors

- [Dragos Cirjan](mailto:dragos.cirjan@gmail.com) - Initial work

See also the list of contributors who participated in this project.

## Issues / Support

Add a set of links to the [issues](/lunaticthinker-me/demo-cross-lang-encryption-js/issues) page/website, so people can know where to add issues/bugs or ask for support.

<!-- ## Changelog

Small changelog history. The rest should be added to [CHANGELOG.md](CHANGELOG.md).

See here a template for changelogs: https://keepachangelog.com/en/1.0.0/

Also see this tool for automatically generating them: https://www.npmjs.com/package/changelog -->

