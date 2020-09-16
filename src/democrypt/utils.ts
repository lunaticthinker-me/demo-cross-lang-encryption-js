import crs from 'crypto-random-string';

export const data = ['th1s1smyp@ssw0rd', crs({length: 4}), crs({length: 16}), crs({length: 100})];
export const aes128Hash = '1234567890123456';
export const aes192Hash = '123456789012345612345678';
export const aes256Hash = '12345678901234561234567890123456';

// C#

// AES Encrypted Values:
export const CS_AES_CFB8_128 = 'iAO2gF/ygfceHmYMEUwJdMhhJXD3hfwBDr93XWGVCVI=';
export const CS_AES_CFB8_192 = 'Sejh4ORJVx8IMvk7dUyk0rhZx2bI1uLKj/UPqmAtK0w=';
export const CS_AES_CFB8_256 = 'jTs7Bn9p8d+k1Jz/nI7qW9ZQn8+h8AfVCXj/UKbUKg4=';
export const CS_AES_CBC_128 = 'QYWu93me1j3N+hQMlGy4Jim5VcZWg7lolfgL+z6xYPUVW6Eh6NDAyrQso+dROQEE';
export const CS_AES_CBC_192 = '02qn1INLMAu7ab5UD3kZo+moI90V5t4GRQdMl3QMEYkmtbCIuakom/9HQ0KEtCkM';
export const CS_AES_CBC_256 = 'wUzLN1kLevdCejEMAlD1zzXaQCH+YaEGi/TgsatOkpOUgUu7DM5Lg1MlCA8ESm/u';

// RSA Encrypted Values:
export const CS_RSA_PKCS1V1_5 =
  'QS8R192/mXHg8VveaOcAKsrp/mPA0pMWQhIHXafU4kA/j4PKZf/kvlzwsSpL3ijcGe/p3piygxuMLDdjPbc7OScWrlc6PfPqI9sKflTraPuLFlNAC6nSiGnyY2vnJ99UrIDhhhPXUkj9uvbbDipuT1qXGDYVOxKWo8UvHQM1epAAvlzY7RwjD96gaalHbV5apIUK8vKsUf1hmVhRwNVHez26oEzaC4OLFs1ohEfQUz0ul8d4UibDy1+E5GT2an4ma1ywPGnf7EGb10KlyPxzBIRQdS/cnHM0d//HenIWqLDfUIQUEim0GBckx+iggDmfbisWjs3f2JXMKmuegf4WzA==';
export const CS_RSA_OAEP =
  'Fvh7WCFkrg4G4u2GJjzl0IuVR6kEnxcuUUEj9vC29cOvIL+JNxHH9CWC0x0YhaD+P4CzVGJe2cMoP8W5xhZnkWeHh02FSnMII0OFrNKC6duCj9L6K4RN3wW7Gt7O7OUSq4HVEeJIoog6VWyzttqDUWNq9LZ9wJ/qe7ooci2tqDSr9jFxYWG5D2QSv4kudo1K9Ps9nw34o8ohNm71A/Egl9ef5sgzy2yoms/IfgCkr7lAj3Ph/nYvyz7nAVLUsjUBZAhioQ+SRhc7Bx8Uot7H4fw17/moHpM9lvj3gVsO9n5Wr8pWA0hL25N8RUJf2VtInbFgcHEAhGEREVJo4CvIRQ==';

// X509 Encrypted Values:
export const CS_X509_OAEP =
  'jJrU2LeQvbg8fEuP1/HKvAmJMPrKHtMJKjUZ7ceU2Xgn5QPpWmaFCRwNn4R7YCqY37vnpzKAvzwt77Z/EW5R68ja7ZCfKX1YMIyU+3JGmjtZTM2IyBv26QSSHm/QU/4vx8y4e/rtBb/pgF1ljOMaKMY0Hvi6AblJJERfgxthGZMBRYrLq1yi7siNBtXiyjBjvkgkAVlFaxj01CU8BK7waIV2Z+QQyyO6PboSgXTlF2n4YSEzuTWIcM1YyEH86sNnD5OMdJ9/j8+y3/GcHF6xv/8ashHE7Zdf/xTqi8eC6Z2RxbeFzYxL20FTY8aUCHeN7d9d20c7FPOd2nKurP9xFw==';
export const CS_X509_PKCS1V1_5 =
  'UjHD5gDLhjSs1VoNIxFAh8wFjqWU+sz8nq0doMdYtiYr95D1qdf3QmaCd0+J2d+xfFV5W1c1J39u1X+xxDX5mWi0rai6HfZI8EzTXlKXN+qz6UmeFYNQEO65CQdc12cKHWMiD63fQYEQf+2w7uxIIR1uO6ys3adJSmUsuFteM7YSCF9jjpwgUMwDeb6Z3pEt+UMH1BlaL2XDCI9u+nGe8o6BaWsgVmVq/hQzlBXaczgsYWhOoaPsTq1IHUlKKHSMBjtlxqUrhqXPhEX9IDshIcJM1PKt/VXUGbldwPfap+y9mvyAOAMqveD0htOOI/qK5cn0k9WphOa6P0qcDeZoHQ==';

// Go

// AES Encrypted Values:
export const GO_AES_CFB_128 = 'okw7RAAwI3pxhnec12/mGFny8kXIhR0Mgedutjg8YXg=';
export const GO_AES_CFB_192 = 'm/hIFwWUahd1lXMBfDelVnbP9OGC+ofIKKMgE7bUAWg=';
export const GO_AES_CFB_256 = '/XWpcGXHh5ZCdM//e7cdrVSy3v1VgPIzhJF8KyWYqqg=';
export const GO_AES_CBC_128 = 'Jd11dOfjgJZ89JG78cEeT4jNgg0ejDPw+u//AzascMS9psoE917pnaSixqTzOPcx';
export const GO_AES_CBC_192 = '2DZQ8Gi3eaaQdpi0ddAJtesknhxk25ParjdX+LCGfl1vMjO4bbU+PJLUo83xQP1o';
export const GO_AES_CBC_256 = '94H2ChG9Ft1g1yIiYrmw1tEJdtlEfItmOOpMo31YeV15Wh3JzxPaMDpNr7Fvu1Os';

// RSA Encrypted Values:
export const GO_RSA_OAEP =
  'ZFZ7dLo4nJP9fPFtmU6os8TSKM3L9/qSV2B9HcgrwLwITwAhT6RV/FDFQ2flr6dggFxCUYdIaNZW6ggQfgqdS90pz62egO+WF5P4lopPQWIDrKlXcfOhvmOmP1gOc2lAg6gcKR6rLJeB0291+teardlLEg82R5wYu2D9cQoUCjExQ/T/qaLKCYwlHzQ5CZlNHKnpKP5WMKlC2u/gkmMdjTw6SkUQGWU8BK2FBmUmLXy7nHGd/DVZrwmog0504NgqjbBe+qeimhrnwTHEYNPmy2jpjjcD2RHnuxxLSzbLX7PxM4sEH43afLzHTCW+GipGt92iCZIc/FYuUsHDSMEaDw==';
export const GO_RSA_PKCS1V1_5 =
  'oTITnprie90QpW5ZmY2vbOhV/z6IxK8GZ6tKE/3ykOrk6RvFXAr6+t3AE+tTmGLG6gNlk2rOaxhzeiVWDYEO6mi6shNNkExua0Wwur0Pz96FR5srp1SsRC2EPQ19/xpiBgmDNmcsja/xWYwyVEkHuKVEL39QOLlzjkQyj5PN0Sf0rVnjXRtMNPoAu3CE+yvkZ8ntXJTaDddnwOW5tW1r1n4Hg4dsLqm5/aHBbS1AHPqo61H5dFknqSC2vSU4JGxoqSoChn543V1gThD4CM6JybihEVL0PVM09Jdizxun3ZMytVHgSRd39aEGCWiANnC6O2HzNaz4uY6/HVqfcBiC1g==';

// X509 Encrypted Values:
export const GO_X509_OAEP =
  'd9kqHVd9m896I5Mb02WQGMbLhnktzU2xieXV2AuPN02q8mAzIsDCanHz59YlNInddTcByz5qXv5Kg35liwoe4UXWhxvG4djoCQ3H4w3fjTs7TjcsJRch2zYhw/sqQst9+25C67XM1QHG1zyf0Ob1i9++SBCTMxYwnQ7vjNEtNlubdYr8d9x/pNo9H2rVUKvyIQ1JBXtj38vNmR5p8xtkrJyAGtmk4z0bcdLBGg6cum3xtdFuV5KNt7HgElV28E8QFrP8l+rMY01UwMIOKY9ag6vCE8kbNs8Ja2bhYw9zrUIn8RnaRjAi2i07DbEdBfOTXZXlyHs2k912wfKJ5zieuQ==';
export const GO_X509_PKCS1V1_5 =
  'Y/tT2YXiHeKyma0QKHcPTP0A4xP54PJ7tT4JMD1Ei6zfPo70UIGsD+RAtYS+g9plCtfgyZZhnOaIKvz/XpLOOSN3svNoS2gisqG/xNi2+ndGxvKrqjnLpHhNqS+MiXzIblZCHsONN6DQwMPYSwd3F5Is60TMC2mNV+1oO3A3sconknYK8VR7dTH8MS6sDSeA1XhRm2s8TNsQz2xsRKklDRrUL+B6TsyGdlPkRTrrawsRrhW5ArxuPRnqT41rEnOQdLx5XeRyUYWEaM+6Llc9xU8XujUn0LUuJ1QNol2qTR+cCXTBXybBPGXnoHUKycNFeGhTQBCEMJ6YIKE+bunAmA==';

// Python

// AES Encrypted Values:
export const PY_AES_CFB8_128 = 'h46EFQVHj9R7VeC3sTPIsCB1OhdA2EtTJFEDJIfFDUg=';
export const PY_AES_CFB8_192 = 'Lvu0lam4Hy7hKru5kayyNYus8bVfTPOUqxQhg+GWpw4=';
export const PY_AES_CFB8_256 = 'JkTd6KAN1TvrMACir5jcdeSr/P511EQX7ph+YM6UV8Q=';
export const PY_AES_CBC_128 = 'w27Mbc3Bfbo2XiYvPO0Ye0uh5eVLCzSSPRWsdn+5ABh4l3CHTB6I9uEXk7B9hqwp';
export const PY_AES_CBC_192 = 'k2HMAGg/UdsZFpM0Kawc5UAaIqKUMtwU5bLWJcwPNmT6CdvMPtKrl2esjx8OaaPU';
export const PY_AES_CBC_256 = 'coC4DSyoEGNNtBbygokNTFEq5aspMtC77bXakhscW/Y4J8GW6T2qH97ELsZNkvEU';

// RSA Encrypted Values:
export const PY_RSA_PKCS1V1_5 =
  'h9CObQU6Rtnmaq34ps3GJxFIg8XMw6iemqLNhEzkE0lp5XlTtKeJ68rDdHhyLMLiXrrkZrn0v3c1sgztS+cHtNURCAF7K5Luunj+YLvwGXXEO3ItDiK4dt/qfmmjUMZ8mdrwxpfMB+2n0cCllMyvCgp1ISQ+CVLCmicM19tfuCfbeXp5d0/AUwRqb+GaMLNNpX6VM+/lnKZeuPywbbEH4xNS3s9+5etED7/Ku5a6pW+kfyWKR4haPmp6q8VJCZR16zQh6tsu+KY5mduX0WdZTUR2qxQ0CdS40nmq1d/n5R72fm/LK2K0DZ5zYfsn/ImmARbkoX3BdIxPHyUi86rkXA==';
export const PY_RSA_OAEP =
  'QhOc6Gxkp7FDPcjYKB4eOCzGL6jlDX74tbFoFCaJm4C+m2HAR1fZBvwrhhawVFPl9oqhJMrn1CjQeyuZoXPyUii6msYsnrH6lZg49v5LXge8fgvplelDM9OhzDtSAGDQWtlR88lph+rorhhQRLZTYK+vRudCFW/R5EdcsbYLgrelVgrHRp0NTP3w34fUMFrBYRN1ur3qMnZXP4rkmfv0YmmQZCHpOa9zYlJGMlhF/u8tD+fZtYR87qaJ/VnwFNIKxoKF09ZIjHNmx1B2iN2wvWFXQLW5sZsFwj8lfRIIM8Uu3avzBnbU9oH6tpahOSpc6AegIRuDZzPfTR++Uxt/Vg==';

// X509 Encrypted Values:
export const PY_X509_PKCS1V1_5 =
  'w/LUbfFOLJS9rV6HktQEP7ehhaS/qYIpWLX26EM2UAKq4K/HPXi2LKVhqWiKfe586wG5xoqpl1uTQHr4Y794Mu96AsUkVEa7SUhLfby1nVC4Bukc0ZyBXzVEKYFLtNHehodNi8OUtyopL9rvbqWn8RXv88mD2wF8mF1wpXpP8J726Eh7QzMqr8/AcrlvQir9L65y7ZrF6us0ZCoNtbaHsebtVS7wHZokQmq/qGc10xj/b2VvtHCVdBKzSEC98lV9j6e+r3A+fs2NR5TeiROjo+3zIY2eyW+WutJzpOMpu85p2A3EXON/GJ9kiBn81rAtkXsOLZzOD7Xh/Iu2nozxPA==';
export const PY_X509_OAEP =
  'XAnksCCYcKCtMn69WjkOd5T+Dfby1uYV6RMI8dfnTzsiJjNvHkTKgmSYycPVqlOs4253zqikaUuu1O35eF+9y7LJV+H3lfKxnAsTf++dAXapLJhpoqAH07+tNGFe3bltcyiLqUH7Apqv6szEtNBgGBO8MmTdcDWQVzwAwaP+3/AKqKCiJyUpwimfjXpl6h19gGCLthFISDxsmsITW1vSMKlFDJGEdq0JzndlaLP0SHM6Jv06NwC2YKTIVYjhPFXdzTaf9iFRoTPGepC198D7Syy+Who61svR0538ID3raNgpR3RUY9bBHzpR+2LxGhq7ZJRZfh/UMXN9p2THLHwOuw==';
