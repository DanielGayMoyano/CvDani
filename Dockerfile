# ETAPA 1: Compilar la app de React
FROM node:20-alpine AS build
WORKDIR /app

# Copiar las dependencias e instalar dentro de la subcarpeta cv
COPY cv/package*.json ./
RUN npm install

# Copiar todo el código de React de la carpeta cv
COPY cv/ ./

# Compilar la aplicación React
RUN npm run build

# ETAPA 2: Servidor ultraligero Nginx
FROM nginx:alpine

# Configuración de Nginx para React (Single Page Application)
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Copiar los archivos compilados de React al contenedor de Nginx
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]