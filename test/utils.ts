import crs from 'crypto-random-string';

export const data = ['th1s1smyp@ssw0rd', crs({length: 4}), crs({length: 16}), crs({length: 100})];
export const aes128Hash = '1234567890123456';
export const aes192Hash = '123456789012345612345678';
export const aes256Hash = '12345678901234561234567890123456';
