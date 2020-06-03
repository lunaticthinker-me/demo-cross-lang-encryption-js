import forge from 'node-forge';

import * as fs from 'fs';

import {Crypt} from './generic';

export class SslCrypt implements Crypt {
  private keyPem: forge.pki.PrivateKey | undefined;
  private crtPem: forge.pki.Certificate | undefined;

  constructor(prvPath: string, pubPath: string) {
    this.keyPem = forge.pki.privateKeyFromPem(fs.readFileSync(prvPath).toString('utf-8'));
    this.crtPem = forge.pki.certificateFromPem(fs.readFileSync(pubPath).toString('utf-8'));
  }

  decrypt(password: string): string {
    if (!this.crtPem) {
      throw new Error('invalid public key');
    }
    if (!(this.crtPem as any).encrypt) {
      throw new Error('invalid rsa public key');
    }
    const utf8Bytes = forge.util.decode64(password);
    const decrypted = (this.keyPem as any).decrypt(utf8Bytes, 'RSA-OAEP', {
      md: forge.md.sha512.create(),
      mgf1: {
        md: forge.md.sha1.create(),
      },
    });

    return forge.util.encodeUtf8(decrypted);
  }

  encrypt(password: string): string {
    if (!this.crtPem) {
      throw new Error('invalid private key');
    }
    if (!(this.crtPem as any).encrypt) {
      throw new Error('invalid rsa private key');
    }
    const ut8Encoded = forge.util.decodeUtf8(password);

    const encrypted = (this.crtPem as any).encrypt(ut8Encoded, 'RSA-OAEP', {
      md: forge.md.sha512.create(),
      mgf1: {
        md: forge.md.sha1.create(),
      },
    });

    return forge.util.encode64(encrypted);
  }
}
