const http = require('http');
const fs = require('fs');
const path = require('path');

// Inclure le fichier discord-rpc.js
const discordRPC = require('./.js');  // Assurez-vous d'ajuster le chemin si nécessaire

// Reste du code du serveur...


const server = http.createServer((req, res) => {
  // Récupérer le chemin du fichier demandé
  const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

  // Lire le fichier demandé
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Si le fichier n'existe pas, renvoyer une erreur 404
        res.writeHead(404);
        res.end('Fichier non trouvé');
      } else {
        // En cas d'erreur différente, renvoyer une erreur 500
        res.writeHead(500);
        res.end('Erreur du serveur');
      }
    } else {
      // Si le fichier est trouvé, renvoyer son contenu
      res.writeHead(200);
      res.end(content, 'utf-8');
    }
  });
});

const PORT = 3000; // Port sur lequel le serveur écoutera
server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
