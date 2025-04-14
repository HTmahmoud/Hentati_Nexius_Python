
FROM node:18-alpine

WORKDIR /app

# Copier package.json et package-lock.json
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Démarrer l'application en mode développement
CMD ["npm", "start"]
