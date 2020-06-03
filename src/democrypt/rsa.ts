import forge from 'node-forge';

import * as fs from 'fs';

import {Crypt} from './generic';

export class RsaCrypt implements Crypt {
  private prvKey: forge.pki.PrivateKey | undefined;
  private pubKey: forge.pki.PublicKey | undefined;

  constructor(prvPath: string, pubPath: string) {
    forge.pki.rsa.generateKeyPair;
    this.prvKey = forge.pki.decryptRsaPrivateKey(fs.readFileSync(prvPath).toString('utf-8'));
    // this.prvKey = forge.pki.privateKeyFromPem(fs.readFileSync(prvPath).toString('utf-8'));
    this.pubKey = forge.pki.publicKeyFromPem(fs.readFileSync(pubPath).toString('utf-8'));
  }

  decrypt(password: string): string {
    if (!this.pubKey) {
      throw new Error('invalid public key');
    }
    if (!(this.pubKey as any).encrypt) {
      throw new Error('invalid rsa public key');
    }
    const utf8Bytes = forge.util.decode64(password);
    const decrypted = (this.prvKey as any).decrypt(utf8Bytes, 'RSAES-PKCS1-V1_5');

    return forge.util.encodeUtf8(decrypted);
  }

  encrypt(password: string): string {
    if (!this.pubKey) {
      throw new Error('invalid private key');
    }
    if (!(this.pubKey as any).encrypt) {
      throw new Error('invalid rsa private key');
    }
    const ut8Encoded = forge.util.decodeUtf8(password);

    const encrypted = (this.pubKey as any).encrypt(ut8Encoded, 'RSAES-PKCS1-V1_5');

    return forge.util.encode64(encrypted);
  }
}
