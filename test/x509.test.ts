import {expect} from 'chai';

import * as crypto from 'crypto';

import * as path from 'path';

import {it, describe} from 'mocha';

import {X509Crypt, RsaCryptPaddings} from './../src';

import {data} from './utils';

describe('X509Crypt', function () {
  let x509: Record<string, X509Crypt> = {};

  beforeEach(function () {
    for (const pad in RsaCryptPaddings) {
      x509[pad] = new X509Crypt(
        path.join(__dirname, '..', 'cert', 'x509', 'key.pem'),
        path.join(__dirname, '..', 'cert', 'x509', 'cert.pem'),
        {
          padding: RsaCryptPaddings[pad],
        },
      );
    }
  });

  afterEach(function () {
    x509 = {};
  });

  it('new X509Crypt()', function () {
    expect(x509.pkcs1 instanceof X509Crypt).to.be.true;
  });

  // eslint-disable-next-line mocha/no-setup-in-describe
  for (const padding in RsaCryptPaddings) {
    // if (padding === 'pkcs1') {
    //   continue;
    // }
    describe(`encrypt/decrypt x509(${padding})`, () => {
      for (const item of data) {
        it(`encrypt/decrypt => '${item}'`, function () {
          const encrypted = x509[padding].encrypt(item);
          expect(encrypted).to.be.a('string');

          const decrypted = x509[padding].decrypt(encrypted);
          expect(decrypted).to.equal(item);
        });
      }
    });
  }
});
