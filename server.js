// on importe les modules nécessaires
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

//On crée le serveur JSON
const server = jsonServer.create();

//On configure le router en utilisant le fichier db.json
const router = jsonServer.router(path.join(__dirname, 'db.json'));

//On active les middlewares par défaut
const middlewares = jsonServer.defaults();

//On configure les règles d'authentfication
const rules = auth.rewriter({
  "/products": "/660/products",
  "/products/:id*": "/640/products/:id",



  
});

//On associe le router au serveur
server.db = router.db;

//On utilise les middlewares, les régles d'authentification et le router
server.use(middlewares);
server.use(rules);
server.use(auth);
server.use(router);


//On lance le serveur sur le port 3000
server.listen(3000, () => {
  console.log('🗄️ Le serveur JSON est lancé à '+'localhost:3000 🗄️');
});
