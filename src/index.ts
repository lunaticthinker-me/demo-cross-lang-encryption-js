import * as path from 'path';

import {AesCrypt, RsaCrypt, SslCrypt} from './democrypt';

const password = 'th1s1smyp@ssw0rd';

const doAes = async (): Promise<void> => {
  console.log('Using AES:');

  const rsa = new AesCrypt('1234567890123456');

  const encPasswordAes = await rsa.encrypt(password);
  const decPasswordAes = await rsa.decrypt(encPasswordAes);
  const decPasswordAesCsharp = await rsa.decrypt('nrc2FBex/MjblB/skCbwlb6TxoavgZ6bFMpS7utIL/4=');

  console.log(
    `password: ${password} \nenc password: ${encPasswordAes} \ndec password: ${decPasswordAes} \n` +
      `dec password C#: ${decPasswordAesCsharp} \n\n`,
  );
};

const doRsa = (): void => {
  console.log('Using RSA:');

  const rsa = new RsaCrypt(
    path.join(__dirname, '..', 'cert', 'rsa', 'key.pem'),
    path.join(__dirname, '..', 'cert', 'rsa', 'cert.pem'),
  );

  const encPasswordRsa = rsa.encrypt(password);
  const decPasswordRsa = rsa.decrypt(encPasswordRsa);

  const decPasswordRsaCSharp = rsa.decrypt(
    'hXCUXgbnZ769npjP3HomRMhgu572HSCu/GZsauY2qRkaY0nL6zriBMgpCWxTl0KUOSebJNjG9idJjPdZPR8VITN307BYFCF1sF78DSHO//pjXUy8VozGs0t/cEsFhvXBcldlF5sQqAxsODA/q8CvYkBiZ3AVAa/O1FNbhwbm66Yv/cqfIvN2hIbW5wYLHcQCruGu+BLimQlzVgH1zE7+nAphBF1jXfx9mlHRWuLRnNvgJ9CBZniRlOfW9Py9lQfQTxxBbu40PEyzq66N/oHPcko+0TXBsHSqOn81iKxzbPA9jgSFndSOtFiPRMjGcJt1+2jhilB/mGGDuIQJ75puCg==',
  );

  console.log(
    `password: ${password} \nenc password: ${encPasswordRsa} \ndec password: ${decPasswordRsa} \n` +
      `dec password C#: ${decPasswordRsaCSharp} \n\n`,
  );
};

const doSsl = (): void => {
  console.log('Using SSL:');

  const ssl = new SslCrypt(
    path.join(__dirname, '..', 'cert', 'ssl', 'key.pem'),
    path.join(__dirname, '..', 'cert', 'ssl', 'cert.pem'),
  );

  const encPasswordSsl = ssl.encrypt(password);
  const decPasswordSsl = ssl.decrypt(encPasswordSsl);

  const decPasswordSslCSharp = ssl.decrypt(
    'ZPPx5HS4o79anStQY6hXDkM4f/GGB58UkvT9t6MPsfRMiCAMej6evMc7H4t7KwZM8NSpLyV/GnAtt95kk4HMWFVrHdQOeQz+LKJeVISx9znOUFQpyGsWGiDUBS5Qoudm3Gd18Wdmo2xSFqBRieke4s5DpcWt7EKazVOhEo81yC5g3nADiV1LtKhDez4bz9/NVdH4phhlBXaKd3hqMJFP8peRLj52wmzJ6SOvn8jyRUMujceq+TM/iUgEv89s1bZMqvgn+lgKh9U06f6RhXRMEP69I6nML7apd9UsMO8MX4X0WKoTIfyJmXuFBXPMlTkmPr/q+VL/EY5IX3f6TwPO6g==',
  );

  console.log(
    `password: ${password} \nenc password: ${encPasswordSsl} \ndec password: ${decPasswordSsl} \n` +
      `dec password C#: ${decPasswordSslCSharp} \n\n`,
  );
};

const main = async (): Promise<void> => {
  await doAes();
  // doRsa();
  doSsl();
};

main();
