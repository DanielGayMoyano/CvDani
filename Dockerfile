FROM node:20-alpine

WORKDIR /app

# Copiar dependencias primero para aprovechar la caché
COPY package*.json ./
RUN npm install

# Copiar el resto del código (o usar volúmenes)
COPY . .

EXPOSE 3000

# Comando para mantener la aplicación ejecutándose (ej. usando nodemon o npm start)
CMD ["npm", "run", "dev"]
CMD ["npm start"]
