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

  protected base64Length(cipher: string): number {
    return Math.floor((3 * cipher.length) / 4) - cipher.replace(/[^=]/gi, '').length;
  }

  decrypt(data: string): string {
    // const buffer = new Buffer(password, 'base64');
    const buffer = Buffer.alloc(this.base64Length(data), data, 'base64');
    const decrypted = crypto.privateDecrypt(
      {
        ...this.options,
        key: this.prvKey,
      },
      buffer,
    );
    return decrypted.toString('utf-8');
  }

  encrypt(cipher: string): string {
    const buffer = new util.TextEncoder().encode(cipher);
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
