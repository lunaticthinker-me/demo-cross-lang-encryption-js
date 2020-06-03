#! /bin/bash

mkdir -p ./cert/rsa

openssl genrsa -out cert/rsa/key.pem 2048
openssl rsa -in cert/rsa/key.pem -pubout -out cert/rsa/cert.pem
