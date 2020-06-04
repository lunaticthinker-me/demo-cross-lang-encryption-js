import {expect} from 'chai';

import {it, describe} from 'mocha';

import {doAes, doRsa, doSsl} from './../src';

describe('do', () => {
  it('doAes()', async () => {
    doAes();
  });

  it('doRsa()', async () => {
    doRsa();
  });

  it('doSsl()', async () => {
    doSsl();
  });
});
