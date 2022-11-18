import {expect} from 'chai';
import * as crypto from 'crypto';

import * as path from 'path';

import {it, describe} from 'mocha';

import {X509Crypt, RsaCryptPaddings} from './../src/democrypt';
import {data} from './utils';

describe('X509Crypt', function () {
  let rsa: Record<string, X509Crypt> = {};

  beforeEach(function () {
    for (const pad in RsaCryptPaddings) {
      rsa[pad] = new X509Crypt(
        path.join(__dirname, '..', 'cert', 'x509', 'key.pem'),
        path.join(__dirname, '..', 'cert', 'x509', 'cert.pem'),
        {
          padding: RsaCryptPaddings[pad],
        },
      );
    }
  });

  afterEach(function () {
    rsa = {};
  });

  it('new X509Crypt()', function () {
    expect(rsa.pkcs1 instanceof X509Crypt).to.be.true;
  });

  // eslint-disable-next-line mocha/no-setup-in-describe
  for (const padding in RsaCryptPaddings) {
    describe(`encrypt/decrypt rsa(${padding})`, () => {
      for (const item of data) {
        it(`encrypt/decrypt => '${item}'`, function () {
          const encrypted = rsa[padding].encrypt(item);
          expect(encrypted).to.be.a('string');

          const decrypted = rsa[padding].decrypt(encrypted);
          expect(decrypted).to.equal(item);
        });
      }
    });
  }
});
