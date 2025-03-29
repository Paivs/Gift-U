server {
    listen 80;
    server_name gift-u.app www.gift-u.app;

    #de http para https
    return 301 https://$host$request_uri;
}

# Configuração para gift-u.app
server {
    listen 443 ssl;
    server_name gift-u.app www.gift-u.app;

    # Caminho para os certificados SSL
    ssl_certificate /etc/letsencrypt/live/gift-u.app/fullchain.pem; # gerido pelo Certbot
    ssl_certificate_key /etc/letsencrypt/live/gift-u.app/privkey.pem; # gerido pelo Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Webhook EFI
    ssl_client_certificate /root/certificate-chain-homolog.crt;
    ssl_verify_client optional;
    ssl_verify_depth 3;

    # Segurança adicional com HSTS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;


    # Configuração para a aplicação Next.js na porta 3003 GIFT-U
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }


    location /api {
        proxy_pass http://localhost:8080;                                       
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /api/webhook {
            if ($ssl_client_verify != SUCCESS) {
              return 403;
            }
            proxy_pass http://localhost:8080/api/webhook;
    }

    # Suporte para arquivos de fonte com CORS
    location ~* \.(eot|ttf|woff|woff2)$ {
        add_header Access-Control-Allow-Origin *;
    }

    # Status do Nginx (apenas localhost)
    location /nginx_status {
        stub_status on;
        allow 127.0.0.1; # Permite acesso apenas localmente
        deny all;
    }
}