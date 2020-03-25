FROM node:12.16.1

WORKDIR /app

RUN npm install -g serve
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .

RUN npm run build

ENTRYPOINT ["serve", "-s", "build"]

