FROM nginx:latest
MAINTAINER Andreson Souza
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY /nginx-proxy/conf.d /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx"]
# Parametros extras para o entrypoint
CMD ["-g", "daemon off;"]