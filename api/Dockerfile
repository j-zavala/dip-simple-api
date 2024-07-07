FROM --platform=linux/amd64 node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD npm rum migration:run && node dist/main.js