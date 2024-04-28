FROM node:18.18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @babel/core @babel/cli

COPY . .

CMD [ "npm","start"]