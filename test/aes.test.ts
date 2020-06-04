import {expect} from 'chai';

import {it, describe} from 'mocha';

import {AesCrypt} from './../src/democrypt/aes';

describe('AesCrypt', () => {
  it('new AesCrypt()', async () => {
    const aes = new AesCrypt('1234567890123456');
    expect(aes instanceof AesCrypt).to.be.true;
  });

  it('encrypt()', async () => {
    const aes = new AesCrypt('1234567890123456');
    const encrypted = await aes.encrypt('test');
    expect(encrypted).to.be.a('string');
  });

  it('decrypt()', async () => {
    const aes = new AesCrypt('1234567890123456');
    const encrypted = await aes.encrypt('test');
    const decrypted = await aes.decrypt(encrypted);
    expect(decrypted).to.equal('test');
  });
});
