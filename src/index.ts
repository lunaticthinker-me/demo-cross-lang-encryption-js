import * as path from 'path';

import {AesCrypt, RsaCrypt} from './democrypt';

const password = 'th1s1smyp@ssw0rd';

const doAes = (): void => {
  console.log('Using AES:');

  const encTool = new AesCrypt('1234567890123456');

  const encPasswordAes = encTool.encrypt(password);
  const decPasswordAes = encTool.decrypt(encPasswordAes);
  // decPasswordAesCsharp, _ := encTool.Decrypt("bJj9fLL39dGw+E926oV23cWB7nIdCF73ojKgfyYEpkg=")

  console.log(`password: ${password} \nenc password: ${encPasswordAes} \ndec password: ${decPasswordAes} \n\n`); //, decPasswordAesCsharp)
};

// func doSsl(password string) {
// 	console.log("Using SSL:")

// 	cwd, _ := os.Getwd()
// 	sslPath := filepath.Join(cwd, "cert", "ssl")

// 	sslTool, err := democrypt.NewSSLCrypt(filepath.Join(sslPath, "cert.pem"), filepath.Join(sslPath, "key.pem"))
// 	if err != nil {
// 		panic(fmt.Errorf("could not create ssl encrypt tool: %v", err.Error()))
// 	}

// 	encPasswordSsl, _ := sslTool.Encrypt(password)
// 	decPasswordSsl, _ := sslTool.Decrypt(encPasswordSsl)

// 	// decPasswordSslCSharp, _ := sslTool.Decrypt("j6vg8/BhBjAhruPA2+ajF2+y5H3uyxWAXB3UhjpZ13n42Ba3HVDcTrWatSJbntojKpPtp7AnJ9qgUI3BY9T7en62TC91CkpQeMkSfJPAi1+9jwUgJbGj2jAk5/iO//+Dj46MTCYMH54L1IcRnKobbShEyqtdrcAvUap66BUd0uneKyWktCRrJD8z7T/Yw7klGSal+r/piBwzd3Wl1BIdf3pDVpeVCpEeBBgF+rElit4Id7blr9K+dEtSU70KggXUvCgVWA4FW2KHS6Abkvabv/+9ntT6bH/cFlDBHqo4JJDODPgYtshv82vaEbpSnhbm11VseklUDTUVJDlGf08Gmg==")

// 	console.log("password: %s \nenc password: %s \ndec password: %s \n\n", password, encPasswordSsl, decPasswordSsl) //, decPasswordSslCSharp)
// }

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
    `password: ${password} \nenc password: ${encPasswordRsa} \ndec password: ${decPasswordRsa} \ndec password C#: ${decPasswordRsaCSharp} \n\n`,
  );
};

doAes();
doRsa();
