import {expect} from 'chai';

import * as path from 'path';

import {it, describe} from 'mocha';

import {SslCrypt} from './../src/democrypt';

describe('SslCrypt', function () {
  it('new SslCrypt()', function () {
    const rsa = new SslCrypt(
      path.join(__dirname, '..', 'cert', 'ssl', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'ssl', 'cert.pem'),
    );
    expect(rsa instanceof SslCrypt).to.be.true;
  });

  it('encrypt()', function () {
    const rsa = new SslCrypt(
      path.join(__dirname, '..', 'cert', 'ssl', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'ssl', 'cert.pem'),
    );
    const encrypted = rsa.encrypt('test');
    expect(encrypted).to.be.a('string');
  });
  it('decrypt()', function () {
    const rsa = new SslCrypt(
      path.join(__dirname, '..', 'cert', 'ssl', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'ssl', 'cert.pem'),
    );
    const encrypted = rsa.encrypt('test');
    const decrypted = rsa.decrypt(encrypted);
    expect(decrypted).to.equal('test');
  });
});
