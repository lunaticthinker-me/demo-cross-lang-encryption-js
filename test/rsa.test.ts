import {expect} from 'chai';

import * as path from 'path';

import {it, describe} from 'mocha';

import {RsaCrypt} from './../src/democrypt';
import {data} from './utils';

describe('RsaCrypt', function () {
  let rsa: RsaCrypt;

  // eslint-disable-next-line mocha/no-mocha-arrows
  before(() => {
    rsa = new RsaCrypt(
      path.join(__dirname, '..', 'cert', 'rsa', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'rsa', 'cert.pem'),
    );
  });

  it('new RsaCrypt()', function () {
    expect(rsa instanceof RsaCrypt).to.be.true;
  });

  for (const item of data) {
    it(`encrypt/decrypt => '${item}'`, function () {
      const encrypted = rsa.encrypt(item);
      expect(encrypted).to.be.a('string');

      const decrypted = rsa.decrypt(encrypted);
      expect(decrypted).to.equal(item);
    });
  }

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it.skip('decrypt() from C# encrypted', function () {
    const decrypted = rsa.decrypt('');
    expect(decrypted).to.equal(data[0]);
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it.skip('decrypt() from GoLang encrypted', function () {
    const decrypted = rsa.decrypt('');
    expect(decrypted).to.equal(data[0]);
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it.skip('decrypt() from Python encrypted', function () {
    const decrypted = rsa.decrypt('');
    expect(decrypted).to.equal(data[0]);
  });
});
