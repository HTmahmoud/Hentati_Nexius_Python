# Étape de build
FROM node:18-alpine as build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm ci

# Copier le reste des fichiers
COPY . .

# Construire l'application
RUN npm run build

# Étape de production
FROM nginx:alpine

# Copier les fichiers de build depuis l'étape précédente
COPY --from=build /app/build /usr/share/nginx/html

# Copier la configuration nginx personnalisée si nécessaire
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]