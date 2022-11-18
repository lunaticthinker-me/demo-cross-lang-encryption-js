import {expect} from 'chai';
import * as crypto from 'crypto';

import * as path from 'path';

import {it, describe} from 'mocha';

import {RsaCrypt, RsaCryptPaddings} from './../src/democrypt';
import {data} from './utils';

describe('RsaCrypt', function () {
  let rsa: Record<string, RsaCrypt> = {};

  beforeEach(function () {
    for (const pad in RsaCryptPaddings) {
      rsa[pad] = new RsaCrypt(
        path.join(__dirname, '..', 'cert', 'rsa', 'key.pem'),
        path.join(__dirname, '..', 'cert', 'rsa', 'cert.pem'),
        {
          padding: RsaCryptPaddings[pad],
        },
      );
    }
  });

  afterEach(function () {
    rsa = {};
  });

  it('new RsaCrypt()', function () {
    expect(rsa.pkcs1 instanceof RsaCrypt).to.be.true;
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
