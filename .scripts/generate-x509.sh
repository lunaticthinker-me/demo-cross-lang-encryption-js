#! /bin/bash

mkdir -p ./cert/x509

openssl genrsa -out ./cert/x509/key.pem 2048
openssl req -x509 -new -nodes -key ./cert/x509/key.pem -sha512 -days 3660 \
  -out ./cert/x509/cert.pem \
  -subj "/C=RO/OU=RND/L=DragosCirjan/ST=PT/O=DragosCirjan/CN=DraagosCirjanSelfSigned"
openssl x509 -in ./cert/x509/cert.pem -text -noout

openssl pkcs12 -export -out ./cert/x509/cert.pfx -inkey ./cert/x509/key.pem -in ./cert/x509/cert.pem
