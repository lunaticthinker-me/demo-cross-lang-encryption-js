import {expect} from 'chai';

import {it, describe} from 'mocha';

import {AesCrypt} from './../src/democrypt/aes';
import {
  aes128Hash,
  aes192Hash,
  aes256Hash,
  data,
  CS_AES_CFB8_128,
  CS_AES_CFB8_192,
  CS_AES_CFB8_256,
  CS_AES_CBC_128,
  CS_AES_CBC_192,
  CS_AES_CBC_256,
  GO_AES_CFB_128,
  GO_AES_CFB_192,
  GO_AES_CFB_256,
  GO_AES_CBC_128,
  GO_AES_CBC_192,
  GO_AES_CBC_256,
  PY_AES_CFB8_128,
  PY_AES_CFB8_192,
  PY_AES_CFB8_256,
  PY_AES_CBC_128,
  PY_AES_CBC_192,
  PY_AES_CBC_256,
} from '../src/democrypt/utils';

describe('AesCrypt', () => {
  let aes128Cfb: AesCrypt;
  let aes192Cfb: AesCrypt;
  let aes256Cfb: AesCrypt;
  let aes128Cfb8: AesCrypt;
  let aes192Cfb8: AesCrypt;
  let aes256Cfb8: AesCrypt;
  let aes128Cbc: AesCrypt;
  let aes192Cbc: AesCrypt;
  let aes256Cbc: AesCrypt;

  // eslint-disable-next-line mocha/no-mocha-arrows
  before(() => {
    aes128Cfb = new AesCrypt(aes128Hash);
    aes192Cfb = new AesCrypt(aes192Hash);
    aes256Cfb = new AesCrypt(aes256Hash);
    aes128Cfb8 = new AesCrypt(aes128Hash, 'CFB8');
    aes192Cfb8 = new AesCrypt(aes192Hash, 'CFB8');
    aes256Cfb8 = new AesCrypt(aes256Hash, 'CFB8');
    aes128Cbc = new AesCrypt(aes128Hash, 'CBC');
    aes192Cbc = new AesCrypt(aes192Hash, 'CBC');
    aes256Cbc = new AesCrypt(aes256Hash, 'CBC');
  });

  it('new AesCrypt()', async () => {
    expect(aes128Cfb instanceof AesCrypt).to.be.true;
  });

  for (const item of data) {
    describe(`encrypt/decrypt => '${item}'`, () => {
      it('aes-128-cfb', async () => {
        const encrypted = await aes128Cfb.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes128Cfb.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
      it('aes-192-cfb', async () => {
        const encrypted = await aes192Cfb.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes192Cfb.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
      it('aes-256-cfb', async () => {
        const encrypted = await aes256Cfb.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes256Cfb.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
      it('aes-128-cfb8', async () => {
        const encrypted = await aes128Cfb8.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes128Cfb8.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
      it('aes-192-cfb8', async () => {
        const encrypted = await aes192Cfb8.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes192Cfb8.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
      it('aes-256-cfb8', async () => {
        const encrypted = await aes256Cfb8.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes256Cfb8.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
      it('aes-128-cbc', async () => {
        const encrypted = await aes128Cbc.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes128Cbc.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
      it('aes-192-cbc', async () => {
        const encrypted = await aes192Cbc.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes192Cbc.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
      it('aes-256-cbc', async () => {
        const encrypted = await aes256Cbc.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes256Cbc.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
    });
  }

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  describe('decrypt() on C# encrypted', () => {
    it('aes-128-cfb8', async () => {
      const decrypted = await aes128Cfb8.decrypt(CS_AES_CFB8_128);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cfb8', async () => {
      const decrypted = await aes192Cfb8.decrypt(CS_AES_CFB8_192);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cfb8', async () => {
      const decrypted = await aes256Cfb8.decrypt(CS_AES_CFB8_256);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-128-cbc', async () => {
      const decrypted = await aes128Cbc.decrypt(CS_AES_CBC_128);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cbc', async () => {
      const decrypted = await aes192Cbc.decrypt(CS_AES_CBC_192);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cbc', async () => {
      const decrypted = await aes256Cbc.decrypt(CS_AES_CBC_256);
      expect(decrypted).to.equal(data[0]);
    });
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  describe('decrypt() on Go encrypted', () => {
    it('aes-128-cfb8', async () => {
      const decrypted = await aes128Cfb.decrypt(GO_AES_CFB_128);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cfb8', async () => {
      const decrypted = await aes192Cfb.decrypt(GO_AES_CFB_192);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cfb8', async () => {
      const decrypted = await aes256Cfb.decrypt(GO_AES_CFB_256);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-128-cbc', async () => {
      const decrypted = await aes128Cbc.decrypt(GO_AES_CBC_128);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cbc', async () => {
      const decrypted = await aes192Cbc.decrypt(GO_AES_CBC_192);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cbc', async () => {
      const decrypted = await aes256Cbc.decrypt(GO_AES_CBC_256);
      expect(decrypted).to.equal(data[0]);
    });
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  describe('decrypt() on Py encrypted', () => {
    it('aes-128-cfb8', async () => {
      const decrypted = await aes128Cfb8.decrypt(PY_AES_CFB8_128);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cfb8', async () => {
      const decrypted = await aes192Cfb8.decrypt(PY_AES_CFB8_192);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cfb8', async () => {
      const decrypted = await aes256Cfb8.decrypt(PY_AES_CFB8_256);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-128-cbc', async () => {
      const decrypted = await aes128Cbc.decrypt(PY_AES_CBC_128);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cbc', async () => {
      const decrypted = await aes192Cbc.decrypt(PY_AES_CBC_192);
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cbc', async () => {
      const decrypted = await aes256Cbc.decrypt(PY_AES_CBC_256);
      expect(decrypted).to.equal(data[0]);
    });
  });
});
