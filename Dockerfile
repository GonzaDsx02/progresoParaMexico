FROM ubuntu:22.04 as build-step

RUN apt update

RUN apt-get install npm -y

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

# part 2

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/www/ /usr/share/nginx/html