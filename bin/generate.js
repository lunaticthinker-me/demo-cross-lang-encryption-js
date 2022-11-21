const path = require('path');
const fs = require('fs');

const crs = require('crypto-random-string');

const {AesCrypt, AesCryptModes, RsaCrypt, RsaCryptPaddings, X509Crypt} = require('../dist/src');

console.log(RsaCryptPaddings);

const run = async () => {
  const AesAlgorithms = [
    // 'ECB',
    'CBC',
    // 'PCBC', // unsupported
    'CFB',
    'CFB8',
    'OFB',
    'CTR',
    'GCM',
    // 'CCM',
  ];

  const results = [];

  for (const algo in AesCryptModes) {
    if (![AesCryptModes.CCM, AesCryptModes.ECB, AesCryptModes.GCM, AesCryptModes.PCBC].includes(algo)) {
      const keys = [crs({length: 16}), crs({length: 24}), crs({length: 32})];
      for (const key of keys) {
        const decrypted = crs({length: 16});
        let encrypted = '';
        let encryptionError = '';
        try {
          encrypted = await new AesCrypt(key, algo).encrypt(decrypted);
        } catch (e) {
          encryptionError = e.message;
        }
        results.push({
          Algo: `AES:${algo}`,
          Key: key,
          Decrypted: decrypted,
          Encryppted: encrypted,
          EncryptionError: encryptionError
        });
      }
    }
  }

  for (const padding in RsaCryptPaddings) {
    const decrypted = crs({length: 16});
    let encrypted = '';
    let encryptionError = '';

    try {
      encrypted = new RsaCrypt(
        path.join(__dirname, '..', 'cert', 'rsa', 'key.pem'),
        path.join(__dirname, '..', 'cert', 'rsa', 'cert.pem'),
        {
          padding: RsaCryptPaddings[padding],
        },
      ).encrypt(decrypted);
    } catch (e) {
      encryptionError = e.message;
    }
    results.push({
      Algo: `RSA:${padding}`,
      Key: '',
      Decrypted: decrypted,
      Encryppted: encrypted,
      EncryptionError: encryptionError,
    });
  }

  for (const padding in RsaCryptPaddings) {
    const decrypted = crs({length: 16});
    let encrypted = '';
    let encryptionError = '';

    try {
      encrypted = new X509Crypt(
        path.join(__dirname, '..', 'cert', 'x509', 'key.pem'),
        path.join(__dirname, '..', 'cert', 'x509', 'cert.pem'),
        {
          padding: RsaCryptPaddings[padding],
        },
      ).encrypt(decrypted);
    } catch (e) {
      encryptionError = e.message;
    }
    results.push({
      Algo: `X509:${padding}`,
      Key: '',
      Decrypted: decrypted,
      Encryppted: encrypted,
      EncryptionError: encryptionError,
    });
  }

  return results;
};

const main = async () => {
  const results = await run();

  console.table(results);

  const csv = results.map((r) => Object.values(r).join(',')).join('\n');

  fs.writeFileSync(path.join(process.cwd(), 'data.csv'), csv);
};

main();
