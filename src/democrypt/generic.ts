export interface Crypt {
  decrypt(password: string): string;
  encrypt(password: string): string;
}
