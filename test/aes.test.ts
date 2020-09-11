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
  describe('decrypt() on C# encrypted', () => {
    it('aes-128-cfb', async () => {
      const aes = new AesCrypt(aes128Hash);
      const decrypted = await aes.decrypt('byuCTbdRr+ypozUmNa5RjEUlCwvKMzLHb2TVEqiYFJo=');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cfb', async () => {
      const aes = new AesCrypt(aes192Hash);
      const decrypted = await aes.decrypt('bXd/eYTJpyFy53PawFW5LzPIGjbdQL/RrE8rz1BwYD0=');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cfb', async () => {
      const aes = new AesCrypt(aes256Hash);
      const decrypted = await aes.decrypt('bED7+lp70X533ISjLScRYe7hgEFddreAGBoIr5gBLxM=');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-128-cbc', async () => {
      const aes = new AesCrypt(aes128Hash, 'CBC');
      const decrypted = await aes.decrypt('uf0v6GuYKU1gw8LTQl47vAdpDcyyumxL8xvHoE7rdVjxeinGZRFYwMmwwI2H1fZU');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cbc', async () => {
      const aes = new AesCrypt(aes192Hash, 'CBC');
      const decrypted = await aes.decrypt('jiDv5Twu6SQ9wMA0F5+2+dOGvfRAxzKZpMillk/HSIFbxQe6JtkVXUUqCqjUswUR');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cbc', async () => {
      const aes = new AesCrypt(aes256Hash, 'CBC');
      const decrypted = await aes.decrypt('5QeOHaKlc+xPlVBVJTEx8Ms3I0at4B+OEQJxrJWHK4MEqnCuvYyxmryMTOmf1Q8H');
      expect(decrypted).to.equal(data[0]);
    });
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  describe.skip('decrypt() on GoLang encrypted', () => {
    it('aes-128-cfb', async () => {
      const aes = new AesCrypt(aes128Hash);
      const decrypted = await aes.decrypt('5WPWeBKWEafSfZCAscojoXjpr6AG78cC7Sqx52X9/fo=');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-192-cfb', async () => {
      const aes = new AesCrypt(aes192Hash);
      const decrypted = await aes.decrypt('lkyhuJGvKOwOT5cKYJz9mmO6ND2PGo/XOM5mv5OIvYM=');
      expect(decrypted).to.equal(data[0]);
    });
    it('aes-256-cfb', async () => {
      const aes = new AesCrypt(aes256Hash);
      const decrypted = await aes.decrypt('bmcX3+xKhz3Xml4/mQTL9qILe7SEIOfocERs4ZcqD74=');
      expect(decrypted).to.equal(data[0]);
    });
    // algorithm missmatch
    it('aes-128-cbc', async () => {
      const aes = new AesCrypt(aes128Hash, 'CBC');
      const decrypted = await aes.decrypt('6u9RmbQs5XQQEIug+lP1+zRssBPfkQ5e0Y78TUbCtUE=');
      expect(decrypted).to.equal(data[0]);
    });
    // algorithm missmatch
    it('aes-192-cbc', async () => {
      const aes = new AesCrypt(aes192Hash, 'CBC');
      const decrypted = await aes.decrypt('hCNI0Yb90jKAhds4x9c4G0c5CwtRxMtCfe4As3JIq8A=');
      expect(decrypted).to.equal(data[0]);
    });
    // algorithm missmatch
    it('aes-256-cbc', async () => {
      const aes = new AesCrypt(aes256Hash, 'CBC');
      const decrypted = await aes.decrypt('dXP9pSWf6cgAegouT5UDTfkDE+t7A3j9khe7N/vNB00=');
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
