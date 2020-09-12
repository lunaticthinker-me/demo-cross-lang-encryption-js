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

// Go

// AES Encrypted Values:
export const GO_AES_CFB_128 = 'oY1l7SRz3vPu/nLaNf6euVkBZhLuy4pQwdinAXvF2yw=';
export const GO_AES_CFB_192 = 'G+vaj9f0x9iBpQ6TLyP/fCXUHxh22K992SH54PnTk/0=';
export const GO_AES_CFB_256 = 'nrJOJyOcYkUsONjMV9wTi2aGxCaDGtdsw7sboqUS7M0=';
export const GO_AES_CBC_128 = 'q3COtjkmO4qgM01LlmE5tIJAhD9mqhMiJ6tSJjEKcqr22z4R4SLuZfMVp4Hf3/+h';
export const GO_AES_CBC_192 = '3ENacZVU6cNoMWQnVwc5CpjEErXXjg8dhFvSVLF3w2M222+YZrdDm6er2LV0CblB';
export const GO_AES_CBC_256 = 'qJEl+hMQwkeDCU8AJNIrhkMsIJwOQgdBiYSYAzreK46pwNl9TxHy4yHW3oHuWoUg';
// RSA Encrypted Values:
export const GO_RSA =
  'Dds/kj/UWDC60iHsiOXskhovBYe6FYKiIqQerrwJzoE/ZdPbKBJDOcsNF5U7D+ZlBtLU+F0uUv4gkwEJkVdEkb8WGFIZCYgc0AkSoVVNqNrZrNI4b7hHeggKt4OcfDMjOCa7nLyQ625kO7nGeXFQP7TbsgLfoZwgMhKoAOPh5k2daZF0/6uc6ilVB9iJ+pRo05xF0zXKWBYDUemh5n9nDmEkiK07INYMKv+GquieAfhRJlmGs/hygHPOu3tNEYfJLhVZlLJBlAW5t6LA2u9yncqZiXPDAHZ6YZYQSzgRQ/LX7d2V5UXO8pm8oE9ymFRiMvH1yjk6eBm/VgJ+kyKu1A==';
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
// RSA Encrypted Values:
export const PY_RSA =
  'JR85e0/fuJwrDMY/FbtJWvrihBjKXtguDSh123y5bVTbqKFI35ifuWUOgJkVIVzyAwWsbGh8dkqly0Vk/W1vNweSipdfBJ5QSheveyk+lAozMlr7q/4VTwR81yD7aBFEbYkqEnkIQozk9tnVm2qZ+ty4y1/pLp2r5+DikgldWoYNnkN+4NFXDrfGaGk5OWTgiZcvJQ2M8NogGRvPZoWpKhsfjI5bGajh5Xc8DAUbqJM/7hLMkrPhJFGTY4PD+cR/yXFxC7UbpfdWzZqWJKt9bcyC/G++ojQi5/2lekogNKdz1b5Nw5U2/z/gEZbD02s/nrIads4ihl0b4DCrDf35WA==';
// X509 Encrypted Values:
export const PY_X509 =
  '7RS4gjKfo1OlhyitPbw8MtaiPYrSD999+Esp543KDDgwqu8nFKl+4EZxEdL0kaUdd950+0Mh6zxM6fkTC4N+DPOZ0L+8+Wz77Zsi45gwgLE7eR8xKuI5aqa5nWP6DDCuqh38jvGDexDf7r78tNYJsTjxwNa29Pmil1c0a6M+YhTNiKuyjFhZXjIHN7TD0MFoAtdQfO1tIFPBAvfIJGz2a8vLu+HnOS7fG5AlwNVZKg1+taa5OvSf+ETxkmgGm2MWWTIhkmIF8OM7gH944s94UEQOmcNxuSDz0ekUCAKangLsNLBFbD5zEkun3vdYLG+pfizjhh8vzqKDbn0IPaVKUA==';
