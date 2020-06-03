import {expect} from 'chai';

import * as path from 'path';

import {it, describe} from 'mocha';

import {RsaCrypt} from './../src/democrypt';

describe('RsaCrypt', function () {
  it('new RsaCrypt()', function () {
    const rsa = new RsaCrypt(
      path.join(__dirname, '..', 'cert', 'rsa', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'rsa', 'cert.pem'),
    );
    expect(rsa instanceof RsaCrypt).to.be.true;
  });

  it('encrypt()', function () {
    const rsa = new RsaCrypt(
      path.join(__dirname, '..', 'cert', 'rsa', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'rsa', 'cert.pem'),
    );
    const encrypted = rsa.encrypt('test');
    expect(encrypted).to.be.a('string');
  });
  it('decrypt()', function () {
    const rsa = new RsaCrypt(
      path.join(__dirname, '..', 'cert', 'rsa', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'rsa', 'cert.pem'),
    );
    const encrypted = rsa.encrypt('test');
    const decrypted = rsa.decrypt(encrypted);
    expect(decrypted).to.equal('test');
  });
});
