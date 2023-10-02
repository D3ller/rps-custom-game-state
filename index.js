const http = require("http");
const fs = require("fs");
const url = require("url");
const DiscordRPC = require("discord-rpc");

const clientId = "1158329363465523210";
DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: "ipc" });

rpc.on("ready", () => {
  console.log("Connectez en tant que: ", rpc.user.username);
});

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/updateGameState" && parsedUrl.query.state) {
    rpc.setActivity({
      details: "Détails",
      largeImageKey: "repreviews",
      largeImageText: "Description de l'image",
        instance: false,
        buttons: [
            { label: "Site officiel", url: "https://test.com" },
            { label: "Rejoindre le serveur", url: "https://test.com"}
        ]
    });
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Mise à jour de l'état du jeu");
  } else {
    fs.readFile("index.html", (error, content) => {
      if (error) {
        res.writeHead(500);
        res.end("Erreur interne du serveur");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content, "utf-8");
      }
    });
  }
});

server.listen(8000, () => {
  console.log("Le serveur à était lancé à l'adresse http://localhost:8000/");
  rpc.login({ clientId }).catch(console.error);
});
