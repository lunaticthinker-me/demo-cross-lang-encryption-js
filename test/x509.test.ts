import {expect} from 'chai';
import * as crypto from 'crypto';
import {describe, it} from 'mocha';
import * as path from 'path';

import {X509Crypt} from '../src/democrypt';
import {
  data,
  GO_X509_PKCS1V1_5,
  GO_X509_OAEP,
  PY_X509_OAEP,
  PY_X509_PKCS1V1_5,
  CS_X509_PKCS1V1_5,
  CS_X509_OAEP,
} from '../src/democrypt/utils';

describe('X509Crypt', function () {
  let x509Oaep: X509Crypt;
  let x509Pkcs1v15: X509Crypt;

  // eslint-disable-next-line mocha/no-mocha-arrows
  before(() => {
    x509Oaep = new X509Crypt(
      path.join(__dirname, '..', 'cert', 'x509', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'x509', 'cert.pem'),
    );
    x509Pkcs1v15 = new X509Crypt(
      path.join(__dirname, '..', 'cert', 'x509', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'x509', 'cert.pem'),
      {
        oaepHash: 'sha512',
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
    );
  });

  it('new X509Crypt()', function () {
    expect(x509Oaep instanceof X509Crypt).to.be.true;
  });

  // eslint-disable-next-line mocha/no-setup-in-describe
  for (const item of data) {
    it(`encrypt/decrypt oaep => '${item}'`, function () {
      const encrypted = x509Oaep.encrypt(item);
      expect(encrypted).to.be.a('string');

      const decrypted = x509Oaep.decrypt(encrypted);
      expect(decrypted).to.equal(item);
    });
  }

  // eslint-disable-next-line mocha/no-setup-in-describe
  for (const item of data) {
    it(`encrypt/decrypt pkcs1v15 => '${item}'`, function () {
      const encrypted = x509Pkcs1v15.encrypt(item);
      expect(encrypted).to.be.a('string');

      const decrypted = x509Pkcs1v15.decrypt(encrypted);
      expect(decrypted).to.equal(item);
    });
  }
  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it('decrypt(PKCS1V15) from C# encrypted', function () {
    const decrypted = x509Pkcs1v15.decrypt(CS_X509_PKCS1V1_5);
    expect(decrypted).to.equal(data[0]);
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it.skip('decrypt(OAEP) from C# encrypted', function () {
    const decrypted = x509Oaep.decrypt(CS_X509_OAEP);
    expect(decrypted).to.equal(data[0]);
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it('decrypt(PKCS1V15) from Go encrypted', function () {
    const decrypted = x509Pkcs1v15.decrypt(GO_X509_PKCS1V1_5);
    expect(decrypted).to.equal(data[0]);
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it.skip('decrypt(OAEP) from Go encrypted', function () {
    const decrypted = x509Oaep.decrypt(GO_X509_OAEP);
    expect(decrypted).to.equal(data[0]);
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it('decrypt(PKCS1V15) from Py encrypted', function () {
    const decrypted = x509Pkcs1v15.decrypt(PY_X509_PKCS1V1_5);
    expect(decrypted).to.equal(data[0]);
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it.skip('decrypt(OAEP) from Py encrypted', function () {
    const decrypted = x509Oaep.decrypt(PY_X509_OAEP);
    expect(decrypted).to.equal(data[0]);
  });
});
