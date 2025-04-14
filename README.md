1- Convertisseur Euro/Dollar
Une application de conversion de devises entre euros et dollars en temps réel, développée avec React et Ant Design.

2- Démo
L'application est disponible en ligne à l'adresse: https://yourusername.github.io/currency-converter

3- Installation

3-1 Clonez le dépôt

bashgit clone https://github.com/yourusername/currency-converter.git
cd currency-converter

3-2 Installez les dépendances

-bash: npm install

3-3 Lancez l'application en mode développement

-bash: npm start

3-4 Pour construire l'application pour la production

-bash: npm run build

3-5 Pour déployer sur GitHub Pages

-bash: npm run deploy


4- Technologies utilisées

React 18
Ant Design 5
JavaScript ES6+
CSS3
GitHub Pages (pour l'hébergement)

5-Démarrer l'application en mode développement
*Utiliser Docker Compose (recommandée)

5-1 Construire et démarrer le conteneur de développement :
bashdocker-compose -f docker-compose.dev.yml up

5-2 Pour exécuter en arrière-plan (mode détaché) :
bashdocker-compose -f docker-compose.dev.yml up -d

5-3 Pour afficher les logs en mode détaché :
bashdocker-compose -f docker-compose.dev.yml logs -f

5-4 Pour arrêter le conteneur :
bashdocker-compose -f docker-compose.dev.yml down
