const crs = require('crypto-random-string');

const {AesCrypt} = require('../dist');


const AesAlgorithms = ['ECB', 'CBC', 'PCBC', 'CFB', 'CFB8', 'OFB', 'CTR', 'GCM'];

const results = [
  ['Algo', 'Key', 'Decrypted', 'Encrypted', 'EncryptionError'],
]


for (const algo of AesAlgorithms) {
  const keys = [
    crs({length: 16}),
    crs({length: 24}),
    crs({length: 32}),
  ];
  for (const key of keys) {
    const decrypted = crs({length: 16});
    let encrypted = ''
    let encryptionError = ''
    try {
      encrypted = (new AesCrypt(key, algo)).encrypt(decrypted)
    } catch (e) {
      encryptionError = e.message
    }

    results.push([
      `AES,${algo}`,
      key,
      decrypted,
      encrypted,
      encryptionError,
    ]);
  }
}


