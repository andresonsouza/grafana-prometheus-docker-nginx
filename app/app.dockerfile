FROM node:latest
MAINTAINER Andreson Souza
COPY . /var/www
WORKDIR /var/www
RUN npm install
RUN npm install --save express prom-client
ENTRYPOINT ["npm", "start"]
# Indica/informa qual porta o serviço(node) está expondo.
EXPOSE 3030