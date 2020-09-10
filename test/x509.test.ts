import {expect} from 'chai';

import * as path from 'path';

import {it, describe} from 'mocha';

import {X509Crypt} from './../src/democrypt';
import {data} from './utils';

describe('X509Crypt', function () {
  let x509: X509Crypt;

  // eslint-disable-next-line mocha/no-mocha-arrows
  before(() => {
    x509 = new X509Crypt(
      path.join(__dirname, '..', 'cert', 'x509', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'x509', 'cert.pem'),
    );
  });

  it('new X509Crypt()', function () {
    expect(x509 instanceof X509Crypt).to.be.true;
  });

  for (const item of data) {
    it(`encrypt/decrypt => '${item}'`, function () {
      const encrypted = x509.encrypt(item);
      expect(encrypted).to.be.a('string');

      const decrypted = x509.decrypt(encrypted);
      expect(decrypted).to.equal(item);
    });
  }

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it.skip('decrypt() from C# encrypted', function () {
    const decrypted = x509.decrypt('');
    expect(decrypted).to.equal(data[0]);
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it.skip('decrypt() from GoLang encrypted', function () {
    const decrypted = x509.decrypt('');
    expect(decrypted).to.equal(data[0]);
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it.skip('decrypt() from Python encrypted', function () {
    const decrypted = x509.decrypt('');
    expect(decrypted).to.equal(data[0]);
  });
});
