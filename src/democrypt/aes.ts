import CryptoJS from 'crypto-js';

import {Crypt} from './generic';

export class AesCrypt implements Crypt {
  constructor(private hash: string) {
    if (hash.length !== 16 && hash.length != 64 && hash.length !== 32) {
      throw new Error('invalid hash length. must be 16, 24 or 32');
    }
  }

  decrypt(password: string): string {
    const decoded = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(password));
    return CryptoJS.AES.decrypt(decoded, this.hash).toString(CryptoJS.enc.Utf8);
  }

  encrypt(password: string): string {
    const encrypted = CryptoJS.AES.encrypt(password, this.hash).toString();
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encrypted));
  }
}
