# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_OPTIONS="--max-old-space-size=4096"
# Añade estas variables para reducir el uso de memoria
ENV STRAPI_TELEMETRY_DISABLED=true
ENV NODE_ENV=production
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

# Copy only necessary files
COPY --from=builder /app ./

RUN npm install --production

EXPOSE 1337

CMD ["npm", "start"]