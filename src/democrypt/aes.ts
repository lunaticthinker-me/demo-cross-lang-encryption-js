import * as crypto from 'crypto';

export class AesCrypt /*implements Crypt*/ {
  protected algorithm: string;

  constructor(private hash: string) {
    switch (hash.length) {
      case 16:
        // https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#History_and_standardization
        // 'aes-128-<abbr>'
        this.algorithm = 'aes-128-cfb';
        break;
      case 24:
        this.algorithm = 'aes-192-cfb';
        break;
      case 32:
        this.algorithm = 'aes-256-cfb';
        break;
      default:
        throw new Error('invalid hash length. must be 16, 24 or 32');
    }
  }

  protected base64Length(password: string): number {
    return Math.floor((3 * password.length) / 4) - password.replace(/[^=]/gi, '').length;
  }

  async decrypt(password: string): Promise<string> {
    return new Promise((resolve) => {
      const key = this.hash;

      const buffer = Buffer.alloc(this.base64Length(password), password, 'base64');
      const iv = Buffer.alloc(16, 0);
      buffer.copy(iv, 0, 0, 16);

      const encrypted = Buffer.alloc(buffer.length - 16, 0);
      buffer.copy(encrypted, 0, 16, buffer.length);

      const decipher = crypto.createDecipheriv(this.algorithm, key, iv);
      let decrypted: Buffer;
      decipher.on('readable', () => {
        let chunk;
        while (null !== (chunk = decipher.read())) {
          decrypted = decrypted ? Buffer.concat([decrypted, chunk]) : chunk;
        }
      });
      decipher.on('end', () => {
        resolve(decrypted.toString('utf-8'));
      });
      decipher.write(encrypted);
      decipher.end();
    });
  }

  async encrypt(password: string): Promise<string> {
    return new Promise((resolve) => {
      let encrypted: Buffer;

      const key = this.hash;
      const iv = crypto.randomBytes(16);

      const cipher = crypto.createCipheriv(this.algorithm, key, iv);
      cipher.on('readable', () => {
        let chunk;
        while (null !== (chunk = cipher.read())) {
          encrypted = encrypted ? Buffer.concat([encrypted, chunk]) : chunk;
        }
      });
      cipher.on('end', () => {
        const buffer = Buffer.concat([iv, encrypted]);
        resolve(buffer.toString('base64'));
      });
      cipher.write(password);
      cipher.end();
    });
  }
}
