import {expect} from 'chai';
import * as crypto from 'crypto';

import * as path from 'path';

import {it, describe} from 'mocha';

import {RsaCrypt} from './../src/democrypt';
import {
  data,
  CS_RSA_PKCS1V1_5,
  CS_RSA_OAEP,
  GO_RSA_OAEP,
  GO_RSA_PKCS1V1_5,
  PY_RSA_PKCS1V1_5,
  PY_RSA_OAEP,
} from '../src/democrypt/utils';

describe('RsaCrypt', function () {
  let rsaOaep: RsaCrypt;
  let rsaPkcs1v15: RsaCrypt;

  // eslint-disable-next-line mocha/no-mocha-arrows
  before(() => {
    rsaOaep = new RsaCrypt(
      path.join(__dirname, '..', 'cert', 'rsa', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'rsa', 'cert.pem'),
      {
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
    );
    rsaPkcs1v15 = new RsaCrypt(
      path.join(__dirname, '..', 'cert', 'rsa', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'rsa', 'cert.pem'),
    );
  });

  it('new RsaCrypt()', function () {
    expect(rsaPkcs1v15 instanceof RsaCrypt).to.be.true;
  });

  // eslint-disable-next-line mocha/no-setup-in-describe
  for (const item of data) {
    it(`encrypt/decrypt => '${item}'`, function () {
      const encrypted = rsaPkcs1v15.encrypt(item);
      expect(encrypted).to.be.a('string');

      const decrypted = rsaPkcs1v15.decrypt(encrypted);
      expect(decrypted).to.equal(item);
    });
  }

  // //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  // it('decrypt(PKCS1V15) from C# encrypted', function () {
  //   const decrypted = rsaPkcs1v15.decrypt(CS_RSA_PKCS1V1_5);
  //   expect(decrypted).to.equal(data[0]);
  // });

  // //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  // it('decrypt(OAEP) from C# encrypted', function () {
  //   const decrypted = rsaOaep.decrypt(CS_RSA_OAEP);
  //   expect(decrypted).to.equal(data[0]);
  // });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it('decrypt(PKCS1V15) from Go encrypted', function () {
    const decrypted = rsaPkcs1v15.decrypt(GO_RSA_PKCS1V1_5);
    expect(decrypted).to.equal(data[0]);
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it.skip('decrypt(OAEP) from Go encrypted', function () {
    const decrypted = rsaOaep.decrypt(GO_RSA_OAEP);
    expect(decrypted).to.equal(data[0]);
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it('decrypt(PKCS1V15) from Py encrypted', function () {
    const decrypted = rsaPkcs1v15.decrypt(PY_RSA_PKCS1V1_5);
    expect(decrypted).to.equal(data[0]);
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it('decrypt(OAEP) from Py encrypted', function () {
    const decrypted = rsaOaep.decrypt(PY_RSA_OAEP);
    expect(decrypted).to.equal(data[0]);
  });
});
