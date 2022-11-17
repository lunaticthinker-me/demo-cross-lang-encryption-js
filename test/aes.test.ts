import {expect} from 'chai';

import {it, describe} from 'mocha';

import {AesCrypt, AesMode} from './../src/democrypt/aes';
import {data} from './utils';
import crs from 'crypto-random-string';

describe('AesCrypt', () => {
  for (const algo of [
    // 'ECB',
    // 'CBC',
    // 'PCBC',
    'CFB',
    // 'CFB8',
    // 'OFB',
    // 'CTR',
    // 'GCM'
  ]) {
    for (const hash of [crs({length: 16}), crs({length: 24}), crs({length: 32})]) {
      for (const item of data) {
        describe(`encrypt/decrypt => '${item}'`, () => {
          it(`aes encrypt/decrypt ${algo} ${hash}`, async () => {
            const aes = new AesCrypt(hash, algo as AesMode);
            const encrypted = await aes.encrypt(item);
            const decrypted = await aes.decrypt(encrypted);

            expect(decrypted).to.equal(item);
          });
        });
      }
    }
  }
  // //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  // describe('decrypt() on C# encrypted', () => {
  //   it(`aes-128-cfb8', async () => {
  //     const decrypted = await aes128Cfb8.decrypt(CS_AES_CFB8_128);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-192-cfb8', async () => {
  //     const decrypted = await aes192Cfb8.decrypt(CS_AES_CFB8_192);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-256-cfb8', async () => {
  //     const decrypted = await aes256Cfb8.decrypt(CS_AES_CFB8_256);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-128-cbc', async () => {
  //     const decrypted = await aes128Cbc.decrypt(CS_AES_CBC_128);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-192-cbc', async () => {
  //     const decrypted = await aes192Cbc.decrypt(CS_AES_CBC_192);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-256-cbc', async () => {
  //     const decrypted = await aes256Cbc.decrypt(CS_AES_CBC_256);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  // });

  // //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  // describe('decrypt() on Go encrypted', () => {
  //   it(`aes-128-cfb8', async () => {
  //     const decrypted = await aes128Cfb.decrypt(GO_AES_CFB_128);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-192-cfb8', async () => {
  //     const decrypted = await aes192Cfb.decrypt(GO_AES_CFB_192);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-256-cfb8', async () => {
  //     const decrypted = await aes256Cfb.decrypt(GO_AES_CFB_256);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-128-cbc', async () => {
  //     const decrypted = await aes128Cbc.decrypt(GO_AES_CBC_128);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-192-cbc', async () => {
  //     const decrypted = await aes192Cbc.decrypt(GO_AES_CBC_192);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-256-cbc', async () => {
  //     const decrypted = await aes256Cbc.decrypt(GO_AES_CBC_256);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  // });

  // //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  // describe('decrypt() on Py encrypted', () => {
  //   it(`aes-128-cfb8', async () => {
  //     const decrypted = await aes128Cfb8.decrypt(PY_AES_CFB8_128);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-192-cfb8', async () => {
  //     const decrypted = await aes192Cfb8.decrypt(PY_AES_CFB8_192);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-256-cfb8', async () => {
  //     const decrypted = await aes256Cfb8.decrypt(PY_AES_CFB8_256);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-128-cbc', async () => {
  //     const decrypted = await aes128Cbc.decrypt(PY_AES_CBC_128);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-192-cbc', async () => {
  //     const decrypted = await aes192Cbc.decrypt(PY_AES_CBC_192);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  //   it(`aes-256-cbc', async () => {
  //     const decrypted = await aes256Cbc.decrypt(PY_AES_CBC_256);
  //     expect(decrypted).to.equal(data[0]);
  //   });
  // });
});
