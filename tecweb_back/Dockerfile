# Use a imagem PHP oficial do Docker Hub como base
FROM php:latest

RUN apt-get update && apt-get install -y nano

# Copie os arquivos do seu aplicativo para o diretório de trabalho do contêiner
COPY . /www/salvar

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta 80 para acessar o servidor PHP
EXPOSE 80

# Inicie o servidor PHP embutido quando o contêiner for iniciado
CMD ["php", "-S", "0.0.0.0:80"]
