# 1. Imagen base
# ETAPA 1: Compilar Create React App
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run

# ETAPA 2: Servidor ultra ligero Nginx
FROM nginx:alpine

# Copiar el build compilado al directorio de archivos estáticos de Nginx
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]