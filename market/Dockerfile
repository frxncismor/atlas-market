# Etapa 1: Construcción de la aplicación Angular
FROM node:20-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración de la aplicación
COPY package*.json package-lock.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Establecer variables de entorno necesarias para la construcción
ENV NODE_ENV=production

# Construir la aplicación para producción con SSR
RUN npm run config && npm run build

# Etapa 2: Servidor para la aplicación Angular SSR
FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /app
ENV NODE_ENV=production


# Copiar los archivos de configuración (package.json y package-lock.json) desde la etapa builder
COPY --from=builder /app/package*.json ./

# Copiar los archivos construidos desde la etapa anterior
COPY --from=builder /app/dist /app/dist

# Instalar dependencias necesarias para ejecutar la aplicación
RUN npm install --omit=dev

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 4000

# Comando para iniciar la aplicación SSR
CMD ["node", "dist/market/server/server.mjs"]
