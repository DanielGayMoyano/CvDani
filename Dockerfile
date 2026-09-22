# ETAPA 1: Compilar React
FROM node:20-alpine AS build
WORKDIR /app
COPY cv/package*.json ./
RUN npm install
COPY cv/ ./
RUN npm run build

# ETAPA 2: Nginx reemplazando a Express
FROM nginx:alpine

# Configuración equivalente a tu server.js
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
    location /api/hola { \
        default_type application/json; \
        return 200 "{\"mensaje\": \"¡Hola desde Nginx!\"}"; \
    } \
}' > /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]