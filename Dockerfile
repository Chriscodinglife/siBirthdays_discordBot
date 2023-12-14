FROM node:21

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY index.js index.js
COPY deploy-commands.js deploy-commands.js
COPY commands/ ./commands

CMD ["node", "index.js"]