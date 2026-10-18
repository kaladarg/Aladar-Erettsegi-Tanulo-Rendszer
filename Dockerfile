# Builds the app and serves the static files with nginx.
#   docker build -t erettsegi-gyakorlo . && docker run --rm -p 8080:80 erettsegi-gyakorlo
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
