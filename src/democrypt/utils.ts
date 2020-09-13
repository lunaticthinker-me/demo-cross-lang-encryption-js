import crs from 'crypto-random-string';

export const data = ['th1s1smyp@ssw0rd', crs({length: 4}), crs({length: 16}), crs({length: 100})];
export const aes128Hash = '1234567890123456';
export const aes192Hash = '123456789012345612345678';
export const aes256Hash = '12345678901234561234567890123456';

// C#

// AES Encrypted Values:
export const CS_AES_CFB8_128 = 'MQK7w2R/RHDiBEUrA5F3jaAZsq1fpDZ3qJ+lyKVlRQQ=';
export const CS_AES_CFB8_192 = '+LJWCOWPLxUEt2cNRMaerrkcNgt0b60+EbA2Gw75jwg=';
export const CS_AES_CFB8_256 = 'ESLdTg/wZ8QGoOtR7DJf1qQO5E8Cu182yx3S929TFFw=';
export const CS_AES_CBC_128 = 'm9r8vVoc+BDPlacr5knswX7Gn4tXS4/jwBm8T5N0KStikmLeDKutYfto7aB3RP8H';
export const CS_AES_CBC_192 = 'ySohXP9ufwcH6YqOTBGo6bYDP1eo1DrmgA0fe6/7HDbeQfhVKBhrR69ZrxH9/BUg';
export const CS_AES_CBC_256 = 'BIlVqTn5K6ayY2AatQn26CWB4R4scMnwYlLSBpwQJT/g2b9BTtL85e+azmt4L7f9';
// RSA Encrypted Values:
export const CS_RSA_PKCS1V1_5 = 'QLAPKvBmzUFyN5bv0K4VCrhaGe6lh5Zfcd/6fGFb576ybRRWXdgYrpM4GOAAQ4fgsSRm6C9xLuJn5iRXyPZ8BJhFEqvdFpV2j+jac21IIkxG7sqTyLQn4FF6FdUf1bC3fPrC8fNS+J59mpUE5p4dDia3im/YgA4LYaOlY0VGLR5sukdrt2EsWtmHN41a9XDRtklSdfP3ReU9K0NlX+hL3SvJ35TZxkEZMvMKQXYKkfWvhvJARbrZY6JBae1p2n8kRipK0hXDbVgy2kraL1lBYJLGFstsexG9DpL7ydIgxYO3mckS+YoGT5irSM6uoEs5Ffi2YJ2JNWaxwHqTs4fz2Q=='
export const CS_RSA_OAEP = 'LjgIXwqQYp+Rx4knbuj22e8q0+ixtjIxsdbFdhweXTmqtaudNZLqI0HsaiwIvw3r8/OokVHR9zZtbpGPQinPX4jQf0uQ29FUufd3oYdhC1cV7hjvfQDuYELXl5kKqPUtdYPqgD/tapZAXW8F3RLroxe36I96wjbhrcLZhXu8n0FLvgbbIDZkQ8AgNxVpthqb7LIrVMjIPq3gqlImLZMyDbPhsMnzW708eFBTHlR2dh1H93nj6Tsh+971Mbfmo4iboLRtJzUg2CvrfEHv3SOARKkKFconINPkaTHyZYUW/UIbeTF/Ui1aLpjMkhcUUqKFMVGmH7ZlmT6gHGUZVEy13w=='// X509 Encrypted Values:
// X509 Encrypted Values:
export const CS_X509 =
  'g5DhZz5ua+VUZutyAQK+8EtgHU1TDtYvAlZ1ZGjGsMSuzk2i';

// Go

// AES Encrypted Values:
export const GO_AES_CFB_128 = 'oY1l7SRz3vPu/nLaNf6euVkBZhLuy4pQwdinAXvF2yw=';
export const GO_AES_CFB_192 = 'G+vaj9f0x9iBpQ6TLyP/fCXUHxh22K992SH54PnTk/0=';
export const GO_AES_CFB_256 = 'nrJOJyOcYkUsONjMV9wTi2aGxCaDGtdsw7sboqUS7M0=';
export const GO_AES_CBC_128 = 'q3COtjkmO4qgM01LlmE5tIJAhD9mqhMiJ6tSJjEKcqr22z4R4SLuZfMVp4Hf3/+h';
export const GO_AES_CBC_192 = '3ENacZVU6cNoMWQnVwc5CpjEErXXjg8dhFvSVLF3w2M222+YZrdDm6er2LV0CblB';
export const GO_AES_CBC_256 = 'qJEl+hMQwkeDCU8AJNIrhkMsIJwOQgdBiYSYAzreK46pwNl9TxHy4yHW3oHuWoUg';
// RSA Encrypted Values:
export const GO_RSA_OAEP = 'F07Bx1Ok/pPQuHiCW2KUPAkqoqg+15JsZRY6dFyOEnu6j5KysSc4VMov3Y6UXiQztCjD2xdu7cnkkGVGz5388TH/k6tFk4MHUIxBrEzwCXjlQIKZtw6Fvx8+CBqWY3npAixiPjS8ETe0GIxKc8NptB+wwI5lYBd7L1PeGmS65uCy9LMdv2Z45OboLIHB/XOtmwvAuvsNluVJ3rtvhw2dSv/1GXuJCxEdxVkU6N7E+kbdR+qB4bcbCuYsuGKURvOYAZffraAMc1lOjYdwS5bnCdGczD+0Wv+2uYVyUZi1mrVqMYSHLDE4lF00OOwwFlE1WNrfM9hK57CEaGagbCkvlw=='
export const GO_RSA_PKCS1V1_5 = 'kxve9Bpm4vWjF4UqZMiGkNHQhI8QJ9UFW5ps6Q3bTUliDSlF3bIOBQED0fMCWfWhTveaUrZQWEf8rTs3Xnlkeaf5RN/gZdsDJxZuueFB3sQN8tjPFUetrgcBSk+1HLIbL2K5roU44rX31Rxd6QFk6+Dj4eVBk91Hx+UxfRAETSypbmyVSBItHz6WBFz+CIwhXTqJnmqeOn6rr0TzcyOAUlNKscc8VFjNrMTHQWuOb456hxDMuNzI8wHtFjhnpW6i0XeXyT68U63rxwhfAMQIpfoeSgk/IDCx3WiL7XVlCMLw5UPY9Ir5N9+oemnPX9MD/8wQ00I7HSwg8R0BDqKkUQ=='
// X509 Encrypted Values:
export const GO_X509 =
  'g5DhZz5ua+VUZutyAQK+8EtgHU1TDtYvAlZ1ZGjGsMSuzk2i9wIzqQEBGSRDfWo3TPPCaEo0WuFGHEu5gyYkNBOyYg/x5Cgsb1WlWWvLFic1ImJCAg9uJwRkT+jHlVglcVIVDnd/9Fa8cTUAcT3U1DVH0PutaIkfldrS8pBKBzz8xUbW6oY9BNoLySGHhfZCCaWbYRLhQsPSWGc/GhRHRB25tmDkmVdBoCLuFx+JcwiShuSjWX3hM4LG+gai0PdNAZHeOq+tJkA7cbRYNy5vRWTy3H2zXXBddx8Iuh+4vDRb+spJcxW2LTVe69gAi6jXhT1/Yn43+T4I572/4TAYVA==';

// Python

// AES Encrypted Values:
export const PY_AES_CFB8_128 = '6oCK/yRXa+VIpqP9UaRaB3UKdRJSlMOZ8wVpT2C3VEE=';
export const PY_AES_CFB8_192 = 'BXHM7LgaHrF+gH9ogoJi0sptbZblOlWVhR/8vhWapHY=';
export const PY_AES_CFB8_256 = 'GT/fA+82eKoupF+bQZKz/MQ4RljQLWbocqK5EVA9lAc=';
export const PY_AES_CBC_128 = 'w+9OjMn4Z6YeCrzo7DmhTpL++Udp/vMU+0nulOMcN0JL7iwYIEzKl9iGCVgzCuRf';
export const PY_AES_CBC_192 = '0PuhDzNNaDdFuIFYFN7wmt4ucCWNqYLs3mJdauJgOLx9GBH5zQ6BNQwdjd85I4Hd';
export const PY_AES_CBC_256 = 'BALwcIvh+HaYRkkbuNuUfBWSfUlElpJNOY5YX8AvvLA9bI2N+966RAKRZFG0FZuW';
// RSA Encrypted Values:// RSA Encrypted Values:
export const PY_RSA_PKCS1V1_5 = 'fGbqSNgYCioKV7Kz/RXsOqSLp2e1vUAGnOJ3MMCMoOP+tTLiz69hyJRoPYlZwVkepOWmnEM2i3IZzAfqA7FzICecsjjk/hJOC3D6I+D2L4PVXPyTBsLSxvu9va8F/KzEfUBh/ysuw+JeSUc7k6OAsMPdGZPa8cyGDagKCPrGonaCe8Jnqac+zf81/a5sIche2YOqvQnz3V8ESR3XYuS3WYIn7LHkIFvfb4oxDgN1jSpxSZNImdmmLgjN0pW1Vp/UGQQAhnGgJW2Hs3noQtswq0O0XM3hpHJGzV6NA7eKTUSe1X1BrcAI3cUqwlL0XNBVnsNoq/Mj/Z1/4DgvMl34yg=='
export const PY_RSA_OAEP = 'jbEtUjq4qFzMb1+1LZRO8AZi6UHqm2YYAQjEzYfM5XAYysSdPaFy9EtPFZmgM5ZxbNkThOSvRU2yw9tKUR46F/HRxtqCcnRnbNr+nZoGYRSZzqjyQQsNOGxLBG0X4K0TugvZAu3zU/nFbytEZX/OM/RkiagztXcTGWGWbvfRZ/wvLZTuVH1nAdI9r33PQGceUwplwJ8WFl3amMCC2OejitIXBrkgiHpuAz2IMfj/PM3HN2hykPCb7tTxNmUtc0050NMLaVHYQgxtmQSSCpUPaCz9kZxyjqU1+QYGWw03bgeA02D9tXz13h3j2E9a7CW+Ut6LBja6vOPqnu3oF/p9dw=='
// X509 Encrypted Values:
export const PY_X509 = 'a7XXO55E0ycfEfKJTCBDT4RdLSPWf+4NNDOQh9wrseDBndu11DmhVFWI6is1Avn7dcr8PzGa+AA9NzQXNedrmTegxzJb4tQUtV5fhl5LadnMoYUdyTKcCXMCov9Y4SSTTQw0PMfTVOQtx0MpRlUai+iwS1C65MHSV5eoYbvVyOYvts76HHZpwjoE0ICIZaEY2lJCJB8s6e3M7MlpJv+t6+2rhSO9SLaukeQzpK22ECkPx852JCs47GK89qnyhnRxGiYqX6zrgGnqcz7TsS9eC3Sc9knfx4RiH6J1y3awzo+jrwvSeHWJW+5IxZp1xldv+j6LiUAQxrwCgFG02C9/Yg=='
