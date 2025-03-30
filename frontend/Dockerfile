# Usa a imagem oficial do Node.js
FROM node:18-alpine AS builder
WORKDIR /app

# Copia os arquivos do projeto
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Compila o projeto Next.js
RUN npm run build

# Segunda etapa: cria imagem otimizada
FROM node:18-alpine
WORKDIR /app

# Copia apenas o build e dependências
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
