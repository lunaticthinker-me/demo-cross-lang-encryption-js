import {expect} from 'chai';

import {it, describe} from 'mocha';

import {AesCrypt, AesMode, AesCryptModes} from './../src/democrypt/aes';
import {data} from './utils';
import crs from 'crypto-random-string';

describe('AesCrypt', () => {
  for (const a in AesCryptModes) {
    const algo = a as AesMode;
    // eslint-disable-next-line mocha/no-setup-in-describe
    if (![AesCryptModes.CCM, AesCryptModes.ECB, AesCryptModes.GCM, AesCryptModes.PCBC].includes(algo)) {
      // eslint-disable-next-line mocha/no-setup-in-describe
      describe(`encrypt/decrypt aes(${AesCryptModes[algo]})`, () => {
        // eslint-disable-next-line mocha/no-setup-in-describe
        for (const hash of [crs({length: 16}), crs({length: 24}), crs({length: 32})]) {
          // eslint-disable-next-line mocha/no-setup-in-describe
          describe(`encrypt/decrypt aes(${AesCryptModes[algo]}, key(${hash.length} bytes))`, () => {
            for (const item of data) {
              it(`aes encrypt/decrypt ${item}`, async () => {
                const aes = new AesCrypt(hash, AesCryptModes[algo] as AesMode);
                const encrypted = await aes.encrypt(item);
                const decrypted = await aes.decrypt(encrypted);

                expect(decrypted).to.equal(item);
              });
            }
          });
        }
      });
    }
  }
});
