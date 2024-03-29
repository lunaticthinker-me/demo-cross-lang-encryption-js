const path = require('path');
const fs = require('fs');

const {AesCrypt, RsaCrypt, RsaCryptPaddings, X509Crypt} = require('../dist/src');

let data = '';

const getEncTool = (line) => {
  const [algo, key, text, encrypted, encryptionError] = line;
  if (algo.includes('RSA')) {
    return new RsaCrypt(
      path.join(__dirname, '..', 'cert', 'rsa', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'rsa', 'cert.pem'),
      {
        padding: RsaCryptPaddings[algo.split(':').pop()],
      },
    );
  }
  if (algo.includes('X509')) {
    return new X509Crypt(
      path.join(__dirname, '..', 'cert', 'x509', 'key.pem'),
      path.join(__dirname, '..', 'cert', 'x509', 'cert.pem'),
      {
        padding: RsaCryptPaddings[algo.split(':').pop()],
      },
    );
  }
  return new AesCrypt(key, algo.split(':').pop());
};

const runDecrypt = async (data) => {
  const result = [];
  const lines = data
    .trim()
    .split('\n')
    .map((line) => line.trim().split(','));
  for (const line of lines) {
    try {
      const [algo, key, text, encrypted, encryptionError] = line;
      if (!encryptionError) {
        const encTool = getEncTool(line);
        try {
          const decrypted = await encTool.decrypt(line[3]);
          if (decrypted === text) {
            result.push({
              Algo: algo,
              Decrypted: 'yes',
              DecryptionError: '',
            });
          } else {
            result.push({
              Algo: algo,
              Decrypted: 'no',
              DecryptionError: 'decryption failed',
            });
          }
        } catch (e) {
          result.push({
            Algo: algo,
            Decrypted: 'no',
            DecryptionError: e.message,
          });
        }
      } else {
        result.push({
          Algo: algo,
          Decrypted: 'no',
          DecryptionError: `source could not encrypt: ${encryptionError}`,
        });
      }
    } catch (e) {
      result.push({
        Algo: line[0],
        Decrypted: 'no',
        DecryptionError: `${e.message}`,
      });
    }
  }

  return result;
};

if (process.stdin.isTTY) {
  console.error('No data through pipe. Not gonna work.');
} else {
  process.stdin.on('readable', function () {
    let chunk = '';
    if ((chunk = this.read()) !== null) {
      data += chunk;
    }
  });
  process.stdin.on('end', async function () {
    const result = await runDecrypt(data);
    console.table(result);
  });
}
