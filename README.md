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
CFB 128 => y8R99YhPP/lxUgjqY+SpQAf1YwtONFeup7URr/2vmMk=
CFB 192 => /LTF6sDSYCuZZz/89YsbKHFSLMfLGnJcUTmeOXwN+Jc=
CFB 256 => pw+xIqA9PLYZcpbvYrungH/7sVXkNBZ3euvyEnDpnfk=
CBC 128 => kqiHehYhsAo+ba+w5aJw+7nVftIu9TDIEG39uJHIEXPlfiVjRGc8dYBW2CCqshO2
CBC 192 => Aq4VxKVFXRTZ+8OvzKsw2WGa/DAMC3JZfoLdqza1rcbUdrccUc+7QCTn7cRgyMua
CBC 256 => jWnvB3QpTqPeSTXc5rFQVfTg4RBmKAPcNOE8SQ+BphFv5N0U5Fw5DGZiPTOJkic7

RSA Encrypted Values:
mxsy5KbxfzzLaNR92yxqL2EAFQWYyqXIkjeMlqpNKwwSlSsOeOmmf1xymcIVDrFUpKmeQV9sNwl70mOapeMQSUCbITl97K1YYS7zmeGgzkKbCFMNs8JyR2RToaJxl/vFKuDZJmdBXsFuSPnJZXDe1f4u4woDoDt2CejDGr62MsVhOHGf7cnz7W/jShiYIFnLSj0lD1XP1/GWaA0UWL3KEGCm+XgtqH1pDmhwej4b0UPoTGcYuG13FqWh1No9WHl8P0AmSktYyRv2lEQslEe4EcTMbKVx7l7boOLdDW9kpms0i/dfjsvgVisrvySihXGKomyzm3DDbFSJGxD4Z8AQCw==

X509 Encrypted Values:
gLBPr8J84+lnHkkSrgCrzsmp4xmNw/JXoB46p+YCmpqMvTLmc/ld2kBU9/hqadjsmvNTTu9yWBn5kHuq8rGbN4xglG6zGkN1bIfnJB/7fL28VoeRj5iMLNyRbvCHGzr0++1WfboCpRhxZtumf45N4zmhTs2ngsqwdeaL3JX5bnLpo48aDDoTfwLoyWyKkCgejaObmFE71JzabthfIWNT4t1vJlbsZ8UtpgKDHJEGsPFqbqiNMoVITH/ZAQy23l51KAl0LdH6hYQvY7kIT0N+BjxbgLT++dKc+ZFpTuJaUDChO4++NsNOW2wAYHh2Ekw/7tjlDWnluMU+z6lHnFNriw==
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

