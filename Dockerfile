FROM node:18

WORKDIR /app/clean-ts-api

COPY package.json .

RUN npm install --only=prod

COPY dist dist

EXPOSE 3000

CMD npm start
