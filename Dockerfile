FROM node:21

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY index.js .
COPY deploy-commands.js .
COPY /commands .


CMD ["node", "index.js"]