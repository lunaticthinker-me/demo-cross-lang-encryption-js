import {expect} from 'chai';

import * as path from 'path';

import {it, describe} from 'mocha';

import {SslCrypt} from './../src/democrypt';

describe('SslCrypt', function () {
  it('new SslCrypt()', function () {
    const ssl = new SslCrypt(
      path.join(__dirname, '..', 'cert', 'ssl', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'ssl', 'cert.pem'),
    );
    expect(ssl instanceof SslCrypt).to.be.true;
  });

  it('encrypt()', function () {
    const ssl = new SslCrypt(
      path.join(__dirname, '..', 'cert', 'ssl', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'ssl', 'cert.pem'),
    );
    const encrypted = ssl.encrypt('test');
    expect(encrypted).to.be.a('string');
  });
  it('decrypt()', function () {
    const ssl = new SslCrypt(
      path.join(__dirname, '..', 'cert', 'ssl', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'ssl', 'cert.pem'),
    );
    const encrypted = ssl.encrypt('test');
    const decrypted = ssl.decrypt(encrypted);
    expect(decrypted).to.equal('test');
  });
});
