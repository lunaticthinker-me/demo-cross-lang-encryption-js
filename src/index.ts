import * as path from 'path';
import * as crypto from 'crypto';

import {AesCrypt, RsaCrypt, X509Crypt} from './democrypt';
import {data, aes128Hash, aes192Hash, aes256Hash} from './democrypt/utils';

const main = async (): Promise<void> => {
  const aesCfb128Encrpted = await new AesCrypt(aes128Hash).encrypt(data[0]);
  const aesCfb192Encrpted = await new AesCrypt(aes192Hash).encrypt(data[0]);
  const aesCfb256Encrpted = await new AesCrypt(aes256Hash).encrypt(data[0]);

  const aesCfb8127Encrpted = await new AesCrypt(aes128Hash, 'CFB8').encrypt(data[0]);
  const aesCfb8192Encrpted = await new AesCrypt(aes192Hash, 'CFB8').encrypt(data[0]);
  const aesCfb8256Encrpted = await new AesCrypt(aes256Hash, 'CFB8').encrypt(data[0]);

  const aesCbc127Encrpted = await new AesCrypt(aes128Hash, 'CBC').encrypt(data[0]);
  const aesCbc192Encrpted = await new AesCrypt(aes192Hash, 'CBC').encrypt(data[0]);
  const aesCbc256Encrpted = await new AesCrypt(aes256Hash, 'CBC').encrypt(data[0]);

  for (const term of [
    ['C#', 'public static string JS', '"'],
    ['Go', 'var JS', '"'],
    ['Py', 'JS', "'"],
  ]) {
    const [lang, prefix, quote] = term;

    console.log(`// ${lang}`);
    console.log(``);
    console.log('// AES Encrypted Values:');
    console.log(`${prefix}_AES_CFB_128 = ${quote}${aesCfb128Encrpted}${quote}`);
    console.log(`${prefix}_AES_CFB_192 = ${quote}${aesCfb192Encrpted}${quote}`);
    console.log(`${prefix}_AES_CFB_256 = ${quote}${aesCfb256Encrpted}${quote}`);
    console.log(`${prefix}_AES_CFB8_128 = ${quote}${aesCfb8127Encrpted}${quote}`);
    console.log(`${prefix}_AES_CFB8_192 = ${quote}${aesCfb8192Encrpted}${quote}`);
    console.log(`${prefix}_AES_CFB8_256 = ${quote}${aesCfb8256Encrpted}${quote}`);
    console.log(`${prefix}_AES_CBC_128 = ${quote}${aesCbc127Encrpted}${quote}`);
    console.log(`${prefix}_AES_CBC_192 = ${quote}${aesCbc192Encrpted}${quote}`);
    console.log(`${prefix}_AES_CBC_256 = ${quote}${aesCbc256Encrpted}${quote}`);
    console.log(``);
    console.log('// RSA Encrypted Values:');
    console.log(
      `${prefix}_RSA_PKCS1V1_5 = ${quote}${new RsaCrypt(
        path.join(__dirname, '..', 'cert', 'rsa', 'key.pem'),
        path.join(__dirname, '..', 'cert', 'rsa', 'cert.pem'),
      ).encrypt(data[0])}${quote}`,
    );
    console.log(
      `${prefix}_RSA_OAEP = ${quote}${new RsaCrypt(
        path.join(__dirname, '..', 'cert', 'rsa', 'key.pem'),
        path.join(__dirname, '..', 'cert', 'rsa', 'cert.pem'),
        {
          padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        },
      ).encrypt(data[0])}${quote}`,
    );
    console.log(``);

    console.log('// X509 Encrypted Values:');
    console.log(
      `${prefix}_X509_PKCS1V1_5 = ${quote}${new X509Crypt(
        path.join(__dirname, '..', 'cert', 'x509', 'key.pem'),
        path.join(__dirname, '..', 'cert', 'x509', 'cert.pem'),
      ).encrypt(data[0])}${quote}`,
    );
    console.log(
      `${prefix}_X509_OAEP = ${quote}${new RsaCrypt(
        path.join(__dirname, '..', 'cert', 'x509', 'key.pem'),
        path.join(__dirname, '..', 'cert', 'x509', 'cert.pem'),
        {
          oaepHash: 'sha512',
          padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        },
      ).encrypt(data[0])}${quote}`,
    );
    console.log(``);
    console.log(``);
  }
};

main();
