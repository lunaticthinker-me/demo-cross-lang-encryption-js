import {expect} from 'chai';

import * as path from 'path';

import {it, describe} from 'mocha';

import {X509Crypt} from './../src/democrypt';

describe('X509Crypt', function () {
  it('new X509Crypt()', function () {
    const x509 = new X509Crypt(
      path.join(__dirname, '..', 'cert', 'x509', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'x509', 'cert.pem'),
    );
    expect(x509 instanceof X509Crypt).to.be.true;
  });

  it('encrypt()', function () {
    const x509 = new X509Crypt(
      path.join(__dirname, '..', 'cert', 'x509', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'x509', 'cert.pem'),
    );
    const encrypted = x509.encrypt('test');
    expect(encrypted).to.be.a('string');
  });
  it('decrypt()', function () {
    const x509 = new X509Crypt(
      path.join(__dirname, '..', 'cert', 'x509', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'x509', 'cert.pem'),
    );
    const encrypted = x509.encrypt('test');
    const decrypted = x509.decrypt(encrypted);
    expect(decrypted).to.equal('test');
  });
});
