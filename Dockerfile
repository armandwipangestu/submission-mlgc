FROM node:18

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5500

CMD ["npm", "run", "start"]