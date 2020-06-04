import * as crypto from 'crypto';

import * as fs from 'fs';

import * as util from 'util';

import {Crypt} from './generic';

export class RsaCrypt implements Crypt {
  protected prvKey: string;
  protected pubKey: string;

  protected options: Partial<crypto.RsaPrivateKey> = {
    padding: crypto.constants.RSA_PKCS1_PADDING,
  };

  constructor(prvPath: string, pubPath: string) {
    this.prvKey = fs.readFileSync(prvPath).toString('utf-8');
    this.pubKey = fs.readFileSync(pubPath).toString('utf-8');
  }

  protected base64Length(password: string): number {
    return Math.floor((3 * password.length) / 4) - password.replace(/[^=]/gi, '').length;
  }

  decrypt(password: string): string {
    // const buffer = new Buffer(password, 'base64');
    const buffer = Buffer.alloc(this.base64Length(password), password, 'base64');
    const decrypted = crypto.privateDecrypt(
      {
        ...this.options,
        key: this.prvKey,
      },
      buffer,
    );
    return decrypted.toString('utf-8');
  }

  encrypt(password: string): string {
    const buffer = new util.TextEncoder().encode(password);
    const encrypted = crypto.publicEncrypt(
      {
        ...this.options,
        key: this.prvKey,
      },
      buffer,
    );
    return encrypted.toString('base64');
  }
}
