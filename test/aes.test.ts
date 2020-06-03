import {expect} from 'chai';

import {it, describe} from 'mocha';

import {AesCrypt} from './../src/democrypt/aes';

describe('AesCrypt', function () {
  it('new AesCrypt()', function () {
    const aes = new AesCrypt('1234567890123456');
    expect(aes instanceof AesCrypt).to.be.true;
  });

  it('encrypt()', function () {
    const aes = new AesCrypt('1234567890123456');
    const encrypted = aes.encrypt('test');
    expect(encrypted).to.be.a('string');
  });
  it('decrypt()', function () {
    const aes = new AesCrypt('1234567890123456');
    const encrypted = aes.encrypt('test');
    const decrypted = aes.decrypt(encrypted);
    expect(decrypted).to.equal('test');
  });
});
