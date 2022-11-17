import * as crypto from 'crypto';
import * as semver from 'semver';

export type AesMode = 'ECB' | 'CBC' | 'PCBC' | 'CFB' | 'CFB8' | 'OFB' | 'CTR' | 'GCM';

export class AesCrypt /*implements Crypt*/ {
  protected algorithm: string;

  constructor(private hash: string, protected mode: AesMode = 'CFB') {
    switch (hash.length) {
      case 16:
        // https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#History_and_standardization
        // 'aes-128-<abbr>'
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

  /**
   * @param {Buffer} cipherText An AES encrypted buffer UTF8 encoded
   * @return {Buffer} An AES decrypted buffer UTF8 encoded
   */
  async decryptBytes(cipherText: Buffer): Promise<Buffer> {
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

  async encryptBytes(plaintext: Buffer): Promise<Buffer> {
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
