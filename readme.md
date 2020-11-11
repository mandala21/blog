# Get Start

Projeto de blog para desenvolvedor compartilhar suas experiencias

## Deploy

Voce precisa configurar o nginx

```
cd nginx
cp front front.conf
```

configure o seu dns
```
server {
    listen       80;
    server_name  SEU_DNS_AQUI;
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri /index.html;                 
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

suba os containers

```
docker-compose up -d
```

## Ambiente de desenvolvimento

Se voce ja tiver feito o deploy

```
docker-compose run -p 3000:3000 --rm front sh
yarn dev
```

Caso nao tenha feito precisa instalar as dependencias

```
docker-compose run -p 3000:3000 --rm front sh
yarn install
yarn dev
```