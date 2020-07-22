FROM node:latest
MAINTAINER Andreson Souza
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT ["npm", "start"]
# Indica/informa qual porta o serviço(node) está expondo.
EXPOSE 3030