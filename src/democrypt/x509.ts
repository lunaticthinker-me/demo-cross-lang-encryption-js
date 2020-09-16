import * as crypto from 'crypto';
import * as forge from 'node-forge';

import {Crypt} from './generic';
import {RsaCrypt} from './rsa';

export class X509Crypt extends RsaCrypt implements Crypt {
  // obviously PKCS1 is good also
  protected options: Partial<crypto.RsaPrivateKey> = {
    padding: crypto.constants.RSA_PKCS1_PADDING,
  };

  constructor(prvPath: string, pubPath: string, options?: Partial<crypto.RsaPrivateKey>) {
    super(prvPath, pubPath, options);
  }

  // decrypt(data: string): string {
  //   const buffer = Buffer.alloc(this.base64Length(data), data, 'base64').toString('utf-8');
  //   const privateKey = forge.pki.privateKeyFromPem(this.prvKey) as forge.pki.rsa.PrivateKey
  //   return privateKey.decrypt(
  //     buffer,
  //     this.options.padding === crypto.constants.RSA_PKCS1_OAEP_PADDING ? 'RSA-OAEP' : 'RSAES-PKCS1-V1_5',
  //     this.options.padding === crypto.constants.RSA_PKCS1_OAEP_PADDING
  //       ? {
  //           md: forge.md.sha256.create(),
  //         }
  //       : {},
  //   );
  // }

  // encrypt(plaintext: string): string {
  //   const certificate = forge.pki.certificateFromPem(this.pubKey) as forge.pki.Certificate
  //   const publicKey = certificate.publicKey as forge.pki.rsa.PublicKey
  //   const ciphertext = publicKey.encrypt(
  //     plaintext,
  //     this.options.padding === crypto.constants.RSA_PKCS1_OAEP_PADDING ? 'RSA-OAEP' : 'RSAES-PKCS1-V1_5',
  //     this.options.padding === crypto.constants.RSA_PKCS1_OAEP_PADDING
  //       ? {
  //           md: forge.md.sha256.create(),
  //         }
  //       : {},
  //   );
  //   return Buffer.alloc(ciphertext.length, ciphertext, 'utf-8').toString('base64')
  // }
}
