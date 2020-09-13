# Encrypt/Decrypt Example

[![TravisCI](https://travis-ci.org/lunaticthinker-me/demo-cross-lang-encryption-js.svg?branch=master)](https://travis-ci.org/lunaticthinker-me/demo-cross-lang-encryption-js)
![JSCPD](.jscpd/jscpd-badge.svg?raw=true)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/lunaticthinker-me/demo-cross-lang-encryption-js/issues)

<!-- [![CircleCI](https://circleci.com/gh/lunaticthinker-me/demo-cross-lang-encryption-js.svg?style=shield)](https://circleci.com/gh/lunaticthinker-me/demo-cross-lang-encryption-js) -->

[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=lunaticthinker-me_demo-cross-lang-encryption-js&metric=alert_status)](https://sonarcloud.io/dashboard?id=lunaticthinker-me_demo-cross-lang-encryption-js)
[![SonarCloud Coverage](https://sonarcloud.io/api/project_badges/measure?project=lunaticthinker-me_demo-cross-lang-encryption-js&metric=coverage)](https://sonarcloud.io/component_measures/metric/coverage/list?id=lunaticthinker-me_demo-cross-lang-encryption-js)
[![SonarCloud Bugs](https://sonarcloud.io/api/project_badges/measure?project=lunaticthinker-me_demo-cross-lang-encryption-js&metric=bugs)](https://sonarcloud.io/component_measures/metric/reliability_rating/list?id=lunaticthinker-me_demo-cross-lang-encryption-js)
[![SonarCloud Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=lunaticthinker-me_demo-cross-lang-encryption-js&metric=vulnerabilities)](https://sonarcloud.io/component_measures/metric/security_rating/list?id=lunaticthinker-me_demo-cross-lang-encryption-js)

[![Donate to this project using Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://patreon.com/dragoscirjan)
[![Donate to this project using Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UMMN8JPLVAUR4&source=url)

<!--
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
  - [Compatibility](#compatibility)
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

## Compatibility

| Algorithm / Language (Go) | C# | Go | Js | Py |
|---|---|---|---|---|
| AES/CFB | ? | ✓ | ✓ | ✕ |
| AES/CFB8 | ✓ | ✓ | ✓ | ✓ |
| AES/CBC | ✓ | ✓ | ✓ | ✓ |
| RSA/OAEP | ✓ | ✕ | ✓ | ✓ |
| RSA/PCKS1V15 | ✓ | ✓ | ✓ | ✓ |

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
CFB 128 => ZyoBm4ao9tEBGwAhexUdPy8sAZvFunBsTQt+gtuT4eQ=
CFB 192 => E7lPkQDTeUgdt/NDWizvm0u64pLW5+ukBajd/JY/jDk=
CFB 256 => ZMC+S5VhqVzqYbByTP+RN5cqOshkph7brZ0nMAL6LMY=
CFB8 128 => Z05uRCfXLODT3HRl8tfvUzix/bwI9fmeCiPtxeYNnvo=
CFB8 192 => WLPKdES1Cq35UBR/odXSUQ5kS6kW74BWmcIDXQq3XPA=
CFB8 256 => /KhJeIhJ0C4Iqw6jzwHPvSRxL5vlfD5eofeQtmNita0=
CBC 128 => dm+tS8jvdLhqPV7bC0gMv31LC+g0eriYmzz1WKpc+L7IYf/PE9l6D/zaiBcwfLSn
CBC 192 => etjG/pjgmZijG5fKgb5Pf0iTDEEcK6ynQa8qxfUh19qADV821uK0yJhLNN+ut2Le
CBC 256 => E3zbm3b2U3ey5DAqBPLAILFAfoEFb+vKXRewvo0Bmbxlcf3qQWvAnuTe1PNTaNoA

RSA Encrypted Values:
ejxZ8nhP78EcPV9htkveKjSYpML6WYfwCo+GXQEzeXnvNSEYDY78nr3qZ5lTqNrMMUlcdNIVOygFzRHMERs/UloZdnN/9ZviS40tEaLzZArsbEU9CE1avtAbAs2Fm1uQSbgX0tyHbhF/1nwOPc5VOlpeiGv/44T1yuKuK7H4C8/RhpLDFjs3BhQIML7D/xIxyDW0AQCuktCDX91R6UPSbhW2IFDnEZRWnxRkjhXo/RG2md40iIIaS7CYio1/6wYkuLoU1fHY3ZObjX4CPOINra38kYueX9KDg+dBOIJPeqAJwEdcrRFWOgo4Zk40gufXYWLPHXgeMVvGGBdAYfhCtQ==

X509 Encrypted Values:
hZwqcWtyUqud8icPjRPtq3SzjYUnY9Tyfqq5yCQtYDet5jlb6fBohS/HCrqa0CInk+n2fKyoIwnWXxPXUrokoV85/G1L0IkC5TpSZgD1XnEOsPatR9goIbtRt2kn4JGPo1pQ833xhCdu1eW5wV+jfIzlCyk3XKv0FdF6ccHZoGPU7UkQJaxSBuwZVMxFpqbL0PpDyurJ0nrXi4Fuuq70t3Amo60zn2BR/YlYD1oZ6hkwQ2382hJ12IGKQZXG+alg4WCp5oDkktrMRHflViZ3ce1laQ5kL7f/se4ZXEJ0P8yF5LbmkysxT9RCCbQuZEaqUxrYes+IFeOAWnrhYR5NbQ==
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

