import crs from 'crypto-random-string';

export const data = ['th1s1smyp@ssw0rd', crs({length: 4}), crs({length: 16}), crs({length: 100})];
