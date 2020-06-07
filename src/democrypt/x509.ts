import * as crypto from 'crypto';

import {Crypt} from './generic';
import {RsaCrypt} from './rsa';

export class X509Crypt extends RsaCrypt implements Crypt {
  constructor(prvPath: string, pubPath: string) {
    super(prvPath, pubPath);

    // obviously PKCS1 is good also
    this.options = {
      oaepHash: 'sha512',
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    };
  }
}
