FROM node:latest

WORKDIR /app

COPY package*.json .
COPY ./backend/prisma prisma

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start.dev"]