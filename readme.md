# RPS Custom Game State

## Lancer le serveur local

Commencez par installer les dépendances avec

```npm install```

Puis dans votre terminal, lancez la commande

```node index.js```

Lorsque ceci est fait, rendez-vous sur votre navigateur à l'adresse suivante, cela permettra de lancer le serveur local.

```http://localhost:8000```

## Comment ajouter à son site

Ajoutez le fichier le fichier `index.js` dans votre projet

Sur chaque page de votre site, ajoutez le code suivant (vous pouvez mettre à jour le nombre d'arguments dans la fonction `updateGameState` en fonction de vos besoins)

```js
function updateGameState() {
        const title = document.querySelector("title").innerText;
      fetch("http://localhost:8000/updateGameState?state=${title}");
    }

    document.addEventListener("DOMContentLoaded", () => {
      updateGameState();
    });
```

