//Importando o express para ter acesso a biblioteca
const express = require('express');
//Importanto os crontrollers 
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
//Criando um objeto expecifico para rotas 
const routes = express.Router();

//Criação de rotas
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

//Exportando a variavel 
module.exports  = routes;
