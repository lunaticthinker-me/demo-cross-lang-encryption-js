import {expect} from 'chai';

import {it, describe} from 'mocha';

import {AesCrypt} from './../src/democrypt/aes';
import {aes128Hash, aes192Hash, aes256Hash, data} from './utils';

describe('AesCrypt', () => {
  it('new AesCrypt()', async () => {
    const aes = new AesCrypt(aes192Hash);
    expect(aes instanceof AesCrypt).to.be.true;
  });

  for (const item of data) {
    describe(`encrypt/decrypt => '${item}'`, () => {
      it('aes-128-cfb', async () => {
        const aes = new AesCrypt(aes128Hash);
        const encrypted = await aes.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
      it('aes-192-cfb', async () => {
        const aes = new AesCrypt(aes192Hash);
        const encrypted = await aes.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
      it('aes-256-cfb', async () => {
        const aes = new AesCrypt(aes256Hash);
        const encrypted = await aes.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
      it('aes-128-cbc', async () => {
        const aes = new AesCrypt(aes128Hash, 'CBC');
        const encrypted = await aes.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
      it('aes-192-cbc', async () => {
        const aes = new AesCrypt(aes192Hash, 'CBC');
        const encrypted = await aes.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
      it('aes-256-cbc', async () => {
        const aes = new AesCrypt(aes256Hash, 'CBC');
        const encrypted = await aes.encrypt(item);
        expect(encrypted).to.be.a('string');

        const decrypted = await aes.decrypt(encrypted);
        expect(decrypted).to.equal(item);
      });
    });
  }

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  describe.skip('decrypt() on C# encrypted', () => {
    it('aes-128-cfb', async () => {
      const aes = new AesCrypt(aes128Hash);
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cfb', async () => {
      const aes = new AesCrypt(aes192Hash);
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cfb', async () => {
      const aes = new AesCrypt(aes256Hash);
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-128-cbc', async () => {
      const aes = new AesCrypt(aes128Hash, 'CBC');
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cbc', async () => {
      const aes = new AesCrypt(aes192Hash, 'CBC');
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cbc', async () => {
      const aes = new AesCrypt(aes256Hash, 'CBC');
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  describe.skip('decrypt() on GoLang encrypted', () => {
    it('aes-128-cfb', async () => {
      const aes = new AesCrypt(aes128Hash);
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cfb', async () => {
      const aes = new AesCrypt(aes192Hash);
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cfb', async () => {
      const aes = new AesCrypt(aes256Hash);
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-128-cbc', async () => {
      const aes = new AesCrypt(aes128Hash, 'CBC');
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cbc', async () => {
      const aes = new AesCrypt(aes192Hash, 'CBC');
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cbc', async () => {
      const aes = new AesCrypt(aes256Hash, 'CBC');
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  describe.skip('decrypt() on Python encrypted', () => {
    it('aes-128-cfb', async () => {
      const aes = new AesCrypt(aes128Hash);
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cfb', async () => {
      const aes = new AesCrypt(aes192Hash);
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cfb', async () => {
      const aes = new AesCrypt(aes256Hash);
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-128-cbc', async () => {
      const aes = new AesCrypt(aes128Hash, 'CBC');
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cbc', async () => {
      const aes = new AesCrypt(aes192Hash, 'CBC');
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cbc', async () => {
      const aes = new AesCrypt(aes256Hash, 'CBC');
      const decrypted = await aes.decrypt('');
      expect(decrypted).to.equal(data[0]);
    });
  });
});
