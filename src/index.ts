import * as path from 'path';

import {AesCrypt, RsaCrypt, X509Crypt} from './democrypt';
import {data, aes128Hash, aes192Hash, aes256Hash} from './democrypt/util';

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

  console.log('// AES Encrypted Values:');
  console.log(`JS_AES_CFB_128 = '${aesCfb128Encrpted}'`);
  console.log(`JS_AES_CFB_192 = '${aesCfb192Encrpted}'`);
  console.log(`JS_AES_CFB_256 = '${aesCfb256Encrpted}'`);
  console.log(`JS_AES_CFB8_128 = '${aesCfb8127Encrpted}'`);
  console.log(`JS_AES_CFB8_192 = '${aesCfb8192Encrpted}'`);
  console.log(`JS_AES_CFB8_256 = '${aesCfb8256Encrpted}'`);
  console.log(`JS_AES_CBC_128 = '${aesCbc127Encrpted}'`);
  console.log(`JS_AES_CBC_192 = '${aesCbc192Encrpted}'`);
  console.log(`JS_AES_CBC_256 = '${aesCbc256Encrpted}'`);

  console.log('// RSA Encrypted Values:');
  console.log(
    `JS_RSA = '${new RsaCrypt(
      path.join(__dirname, '..', 'cert', 'rsa', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'rsa', 'cert.pem'),
    ).encrypt(data[0])}'`,
  );

  console.log('// X509 Encrypted Values:');
  console.log(
    `JS_X509 = '${new X509Crypt(
      path.join(__dirname, '..', 'cert', 'x509', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'x509', 'cert.pem'),
    ).encrypt(data[0])}'`,
  );
};

main();
