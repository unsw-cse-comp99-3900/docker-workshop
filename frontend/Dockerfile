FROM node:22-alpine3.22

WORKDIR /app

COPY package*.json .

RUN npm ci 

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]