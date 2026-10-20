# BotDiscord
création de bot pour le serveur discord https://discord.gg/QpkdzHzgDw
Bot Discord développé en JavaScript avec la bibliothèque [discord.js](https://discord.js.org/).

## Prérequis

- [Node.js](https://nodejs.org/) installé
- npm installé
- Un bot créé sur le [Discord Developer Portal](https://discord.com/developers/applications)

## Installation

1. Clone le dépôt :

   ```bash
   git clone https://github.com/Sabo167-exe/botdiscord.git
   ```

2. Accède au dossier du projet :

   ```bash
   cd botdiscord
   ```

3. Installe les dépendances :

   ```bash
   npm install
   ```

## Configuration

Le projet utilise un fichier `token.js` pour stocker le token du bot Discord.

Ce fichier contient des informations sensibles et ne doit jamais être partagé publiquement.

## Fichiers ignorés par Git

Les fichiers et dossiers suivants sont exclus du suivi Git :

- `token.js` : contient le token du bot.
- `node_modules/` : contient les dépendances installées avec npm.
- `package*` : exclut les fichiers dont le nom commence par `package`.

**Attention :** la règle `package*` empêche aussi Git de suivre `package.json` et `package-lock.json`. Il est généralement préférable de les conserver dans le dépôt pour permettre aux autres développeurs d'installer les mêmes dépendances.

## Lancement

Le lancement dépend du fichier JavaScript principal du bot. Par exemple, si celui-ci s'appelle `index.js` :

```bash
node index.js
```
