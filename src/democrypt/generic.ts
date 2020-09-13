export interface Crypt {
  decrypt(data: string): string;
  encrypt(cipher: string): string;
}
