#! /bin/bash

mkdir -p ./cert/ssl

openssl req -newkey rsa:2048 -nodes -keyout cert/ssl/key.pem -x509 -days 365 -out cert/ssl/cert.pem
