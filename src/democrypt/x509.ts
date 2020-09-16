import * as crypto from 'crypto';

import {Crypt} from './generic';
import {RsaCrypt} from './rsa';

export class X509Crypt extends RsaCrypt implements Crypt {
  protected options: Partial<crypto.RsaPrivateKey> = {
    padding: crypto.constants.RSA_PKCS1_PADDING,
  };

  constructor(prvPath: string, pubPath: string, options?: Partial<crypto.RsaPrivateKey>) {
    super(prvPath, pubPath, options);
  }
}
