FROM node:12.16.1

WORKDIR /test

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

CMD npm start