import * as crypto from 'crypto';

import * as semver from 'semver';

import {Crypt} from './generic';

export type AesMode = 'ECB' | 'CBC' | 'PCBC' | 'CFB' | 'CFB8' | 'OFB' | 'CTR' | 'GCM' | 'CCM';

export const AesCryptModes: Record<AesMode, AesMode> = {
  CBC: 'CBC', // ✓
  CCM: 'CCM', // TODO: https://nodejs.org/docs/latest-v15.x/api/crypto.html#crypto_ccm_mode
  CFB: 'CFB',// ✓
  CFB8: 'CFB8', // ✓
  CTR: 'CTR', // ✓
  ECB: 'ECB', // see CCM
  GCM: 'GCM', // see GCM
  OFB: 'OFB', // ✓
  PCBC: 'PCBC', // unavailable
};

export class AesCrypt implements Crypt {
  protected algorithm: string;

  constructor(private hash: string, protected mode: AesMode = 'CFB') {
    if ([/*AesCryptModes.CCM,*/ AesCryptModes.ECB, /*AesCryptModes.GCM,*/ AesCryptModes.PCBC].includes(mode)) {
      throw new Error(`Unsuported cypher: ${mode}`);
    }
    switch (hash.length) {
      // https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#History_and_standardization
      // 'aes-128-<abbr>'
      case 16:
        this.algorithm = `aes-128-${mode.toLowerCase()}`;
        break;
      case 24:
        this.algorithm = `aes-192-${mode.toLowerCase()}`;
        break;
      case 32:
        this.algorithm = `aes-256-${mode.toLowerCase()}`;
        break;
      default:
        throw new Error('invalid hash length. must be 16, 24 or 32');
    }
  }

  protected base64Length(password: string): number {
    return Math.floor((3 * password.length) / 4) - password.replace(/[^=]/gi, '').length;
  }

  /**
   * @param {string} cipherText A Base64 encoded string
   * @return {string} A UTF8 encoded string
   */
  async decrypt(cipherText: string): Promise<string> {
    const cipherBuffer = Buffer.alloc(this.base64Length(cipherText), cipherText, 'base64');
    return this.decryptBytes(cipherBuffer).then((cipher) => cipher.toString('utf-8'));
  }

  async decryptBytesGcm(ciphertext: Buffer): Promise<Buffer> {
    const key = this.hash;

    // const nonce = Buffer.alloc(ciphertext[0], 0);
    // ciphertext.copy(nonce, 0, 1, 1 + ciphertext[0]);

    // let remainingCipherText = Buffer.alloc(ciphertext[1 + ciphertext[0]])
    // const tag = Buffer.alloc(ciphertext[0], 0);

    // const decipher = createDecipheriv('aes-192-ccm', key, nonce, {
    //   authTagLength: 16
    // });
    // decipher.setAuthTag(tag);
    // decipher.setAAD(aad, {
    //   plaintextLength: ciphertext.length
    // });
    // const receivedPlaintext = decipher.update(ciphertext, null, 'utf8');

    return Buffer.from(" ");
  }

  /**
   * @param {Buffer} cipherText An AES encrypted buffer UTF8 encoded
   * @return {Buffer} An AES decrypted buffer UTF8 encoded
   */
  async decryptBytes(cipherText: Buffer): Promise<Buffer> {
    if ([AesCryptModes.CCM, AesCryptModes.GCM].includes(this.mode)) {
      return this.decryptBytesGcm(cipherText);
    }
    return new Promise((resolve) => {
      const key = this.hash;

      const iv = Buffer.alloc(16, 0);
      cipherText.copy(iv, 0, 0, 16);

      const encrypted = Buffer.alloc(cipherText.length - 16, 0);
      cipherText.copy(encrypted, 0, 16, cipherText.length);

      const decipher = crypto.createDecipheriv(this.algorithm, key, iv);
      let decrypted: Buffer;
      decipher.on('readable', () => {
        let chunk;
        while (null !== (chunk = decipher.read())) {
          decrypted = decrypted ? Buffer.concat([decrypted, chunk]) : chunk;
        }
      });
      decipher.on('end', () => {
        resolve(decrypted);
      });
      decipher.write(encrypted);
      decipher.end();
    });
  }

  async encrypt(plaintext: string): Promise<string> {
    return this.encryptBytes(Buffer.alloc(plaintext.length, plaintext, 'utf-8')).then((cipher) =>
      cipher.toString('base64'),
    );
  }

  async encryptBytesGcm(plaintext: Buffer): Promise<Buffer> {
    const nonce = crypto.randomBytes(12);
    const key = this.hash;

    const aad = Buffer.from('0123456789', 'hex');

    const cipher = crypto.createCipheriv(this.algorithm, key, nonce, {
      authTagLength: 16
    } as crypto.CipherGCMOptions) as crypto.CipherGCM;

    cipher.setAAD(aad, {
      plaintextLength: plaintext.length
    });

    const ciphertext = cipher.update(plaintext.toString('utf8'), 'utf8');

    cipher.final();

    const tag = cipher.getAuthTag();

    console.log(Buffer.from([nonce.length]),
    nonce,
    Buffer.from([tag.length]),
    tag,
    Buffer.from([aad.length]),
    aad)

    // return Buffer.concat([
    //   Buffer.from([nonce.length]),
    //   nonce,
    //   Buffer.from([tag.length]),
    //   tag,
    //   Buffer.from([aad.length]),
    //   aad,
    //   ciphertext
    // ]);

    return Buffer.from(" ")
  }

  async encryptBytes(plaintext: Buffer): Promise<Buffer> {
    if ([AesCryptModes.CCM, AesCryptModes.GCM].includes(this.mode)) {
      return this.encryptBytesGcm(plaintext);
    }
    return new Promise((resolve) => {
      let encrypted: Buffer | string;

      const key = this.hash;
      const iv = crypto.randomBytes(16);

      const cipher = crypto.createCipheriv(this.algorithm, key, iv);
      cipher.setEncoding('hex');

      if (semver.gte(process.version, '15.0.0')) {
        encrypted = '';
        cipher.on('data', (chunk) => {
          encrypted += chunk;
        });
      } else {
        cipher.on('readable', () => {
          let chunk;
          while (null !== (chunk = cipher.read())) {
            encrypted = encrypted ? Buffer.concat([encrypted, chunk]) : chunk;
          }
        });
      }

      cipher.on('end', () => {
        const buffer = Buffer.concat([
          iv,
          typeof encrypted === 'string'
            ? Buffer.from(encrypted, 'hex')
            : Buffer.alloc(encrypted.length, encrypted, 'hex'),
        ]);
        resolve(buffer);
      });

      cipher.write(plaintext);
      cipher.end();
    });
  }
}
