## Nginx e docker

### Adicione a resolução de nomes ao arquivo /etc/hosts
```bash
cd scripts
sudo ./script-hosts.sh
```

### Faça o build e suba as aplicações
```bash
docker-compose up --build
```

### Endereço das aplicações
Após subir os serviços com o docker-compose usar os seguintes endereços acessar para as aplicações:

[app.example.com](http://app.example.com)<br />
[grafana.example.com](http://grafana.example.com)<br />
[prometheus.example.com](http://prometheus.example.com)