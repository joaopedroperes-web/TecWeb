# Use uma imagem base adequada
FROM node:14-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e o package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código fonte da aplicação
COPY . .

# Construa a aplicação React
RUN npm run build

# Exponha a porta que a aplicação React está escutando (por padrão, é a porta 3000)
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]
