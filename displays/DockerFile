FROM node:current-alpine

WORKDIR /app

COPY . /server

RUN npm install -g nodemon
RUN npm install

ENTRYPOINT [ "nodemon", "/app/server.js" ]