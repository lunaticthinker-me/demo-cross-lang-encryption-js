import * as path from 'path';

import {AesCrypt, RsaCrypt, X509Crypt} from './democrypt';

const data = 'th1s1smyp@ssw0rd';
const aes128Hash = '1234567890123456';
const aes192Hash = '123456789012345612345678';
const aes256Hash = '12345678901234561234567890123456';

const main = async (): Promise<void> => {
  const aesCfb128Encrpted = await new AesCrypt(aes128Hash).encrypt(data);
  const aesCfb192Encrpted = await new AesCrypt(aes192Hash).encrypt(data);
  const aesCfb256Encrpted = await new AesCrypt(aes256Hash).encrypt(data);

  const aesCfb8127Encrpted = await new AesCrypt(aes128Hash, 'CFB8').encrypt(data);
  const aesCfb8192Encrpted = await new AesCrypt(aes192Hash, 'CFB8').encrypt(data);
  const aesCfb8256Encrpted = await new AesCrypt(aes256Hash, 'CFB8').encrypt(data);

  const aesCbc127Encrpted = await new AesCrypt(aes128Hash, 'CBC').encrypt(data);
  const aesCbc192Encrpted = await new AesCrypt(aes192Hash, 'CBC').encrypt(data);
  const aesCbc256Encrpted = await new AesCrypt(aes256Hash, 'CBC').encrypt(data);

  console.log('AES Encrypted Values:');
  console.log(`CFB 128 => ${aesCfb128Encrpted}`);
  console.log(`CFB 192 => ${aesCfb192Encrpted}`);
  console.log(`CFB 256 => ${aesCfb256Encrpted}`);
  console.log(`CFB8 128 => ${aesCfb8127Encrpted}`);
  console.log(`CFB8 192 => ${aesCfb8192Encrpted}`);
  console.log(`CFB8 256 => ${aesCfb8256Encrpted}`);
  console.log(`CBC 128 => ${aesCbc127Encrpted}`);
  console.log(`CBC 192 => ${aesCbc192Encrpted}`);
  console.log(`CBC 256 => ${aesCbc256Encrpted}`);

  console.log('RSA Encrypted Values:');
  console.log(
    new RsaCrypt(
      path.join(__dirname, '..', 'cert', 'rsa', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'rsa', 'cert.pem'),
    ).encrypt(data),
  );

  console.log('X509 Encrypted Values:');
  console.log(
    new X509Crypt(
      path.join(__dirname, '..', 'cert', 'x509', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'x509', 'cert.pem'),
    ).encrypt(data),
  );
};

main();
