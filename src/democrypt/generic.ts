export interface Crypt {
  decrypt(data: string): string | Promise<string>;
  encrypt(cipher: string): string | Promise<string>;
}
