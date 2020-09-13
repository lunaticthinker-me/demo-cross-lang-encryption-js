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
  it('decrypt() from GoLang encrypted', function () {
    const decrypted = x509.decrypt(
      'leFEibNhepKTLi2Er/BtavLejoKJ895LnkNgLEcolG4FOak7n/dKa1cYAZNrHqA/gu/Sd2HBdRirNI2OyJ766Lm5I5iiMQzLGobFI4+jyeLGDCjo2RjySLFBVjPKKbjo3RxcxpS6C/V3qvet3Px2VwdzCEfB3Ffpimsk6RblaZgLPl6YzRQsV1qkYtxxdsk3mdlR3eyXxSjfSUlx1bSZvv/BD2sCJtq+SiHOP9QfvQ8iIG5IbZtNdT95oaQ92bpGxuWA76DYqbP4C0s/Iv4w/GvV0mcgxcK1ePuY3wzCeHy6a80l36OaQGXf6xEJffvQ/QRz7BaEG2V0Fz/Ezx8L9g==',
    );
    expect(decrypted).to.equal(data[0]);
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it.skip('decrypt() from Python encrypted', function () {
    const decrypted = x509.decrypt('');
    expect(decrypted).to.equal(data[0]);
  });
});
