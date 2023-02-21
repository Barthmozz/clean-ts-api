FROM node:18

WORKDIR /app/clean-ts-api

COPY package.json .

RUN npm install --only=prod
