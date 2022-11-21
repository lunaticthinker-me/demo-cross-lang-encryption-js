import * as crypto from 'crypto';

import {Crypt} from './generic';
import {RsaCrypt} from './rsa';

export class X509Crypt extends RsaCrypt implements Crypt {
  constructor(prvPath: string, pubPath: string, options?: Partial<crypto.RsaPrivateKey>) {
    super(prvPath, pubPath, {
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      ...(options || {}),
    });

    // if (this.options.padding === crypto.constants.RSA_PKCS1_OAEP_PADDING) {
    //   console.log(this.options)
    // }
    // this.options.oaepHash = 'sha512'
  }
}
