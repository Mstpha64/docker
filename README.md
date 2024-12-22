Moustapha Faye groupe 45

Projet API de Scores - Dockerisé
Ce projet est une API simple utilisant Express.js pour gérer des scores de matchs entre différentes équipes de football. Il est dockerisé afin de faciliter son déploiement et son utilisation dans des environnements différents.

Fonctionnalités
L'API permet de gérer des scores de matchs avec trois opérations principales :

GET /scores : Récupérer tous les scores.
POST /scores : Ajouter un nouveau score.
DELETE /scores/:id : Supprimer un score existant par son ID.
Les scores sont stockés en mémoire (pas de base de données persistante) pour des besoins de démonstration.

Installation et utilisation
1. Cloner le projet
Clonez le dépôt Git sur votre machine locale.

git clone https://github.com/Mstpha64/docker/
cd <nom_du_dossier>

2. Construire et lancer l'application avec Docker

Construction de l'image Docker
Dans le répertoire du projet, créez une image Docker en utilisant la commande suivante :

docker build -t scores-api .
Lancer le conteneur Docker
Une fois l'image construite, vous pouvez exécuter le conteneur :

docker run -p 3001:3001 scores-api
Cela va démarrer l'application sur le port 3001 de votre machine locale.

3. Accéder à l'API
Une fois l'application en cours d'exécution, vous pouvez interagir avec l'API via les points de terminaison suivants :

Récupérer tous les scores (GET)

GET http://localhost:3001/scores
Réponse (exemple) :

[
  { "id": 1, "team1": "Barcelone", "team2": "Real Madrid", "score": "2-1" },
  { "id": 2, "team1": "Athletic Bilbao", "team2": "Girone", "score": "1-3" },
  { "id": 3, "team1": "PSG", "team2": "Monaco", "score": "0-0" }
]
Ajouter un score (POST)

POST http://localhost:3001/scores
Content-Type: application/json

{
  "team1": "Bayern Munich",
  "team2": "Dortmund",
  "score": "3-2"
}
Réponse (exemple) :
{
  "message": "Score added successfully",
  "newScore": { "id": 4, "team1": "Bayern Munich", "team2": "Dortmund", "score": "3-2" }
}

Supprimer un score (DELETE)

DELETE http://localhost:3001/scores/:id
Remplacez :id par l'ID du score que vous souhaitez supprimer. Par exemple :

DELETE http://localhost:3001/scores/1
Réponse :
{
  "message": "Score deleted successfully",
  "removedScore": { "id": 1, "team1": "Barcelone", "team2": "Real Madrid", "score": "2-1" }
}
