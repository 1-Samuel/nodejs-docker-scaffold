FROM node:19

WORKDIR /usr/src/app
VOLUME [ "/usr/src/app/config" ]

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]