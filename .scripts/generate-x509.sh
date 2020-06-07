#! /bin/bash

mkdir -p ./cert/x509

openssl req -newkey rsa:2048 -nodes -keyout cert/x509/key.pem -x509 -days 365 -out cert/x509/cert.pem
