import {expect} from 'chai';

import * as path from 'path';

import {it, describe} from 'mocha';

import {RsaCrypt} from './../src/democrypt';
import {data} from '../src/democrypt/utils';

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

  // eslint-disable-next-line mocha/no-setup-in-describe
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
    const decrypted = rsa.decrypt(
      'FxGi+JNXalIIL3Y+poyP4F3j9Mp4yR75Rbe7yx8yI3MNix95OI3LY6jBYpGD5nhXoaYKgX2NrmZcaAeNg7uzIH3m95ULMrboa0Br3IPmEw2aMwW8uxDEL/I4x7Uvlux1QCHnv3rnYNX/Hyipg3DMeKKppmcAYZ1zpfatH6qXMD0vGttpX1KksUe/3TN/oz8swPecAePFg6I/MPcndCxIeVfTXLqUCpQbxvmN7GYQpWbxXGB7S6rQpxNkZLcssH6XHwM/6LRQ3laQ+U+o3kL/bCUUrSB27B6yAB65I0SsLyhFY+bxDjugxOND0MPaVxVpa7MM5lileUL8uqG5U58sBg==',
    );
    expect(decrypted).to.equal(data[0]);
  });

  //eslint-disable-next-line mocha/no-skipped-tests, mocha/no-setup-in-describe
  it.skip('decrypt() from Python encrypted', function () {
    const decrypted = rsa.decrypt('');
    expect(decrypted).to.equal(data[0]);
  });
});
