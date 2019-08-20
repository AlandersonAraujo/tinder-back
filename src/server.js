//Importando o express para ter acesso a biblioteca
const express = require('express');
//Importando as dependencias do banco 
const mongoose = require('mongoose'); 
//Importando uma dependencia que permitir acesso externo
const cors = require('cors');
//Importando as rotas
const routes = require('./routes')
//Criando o servidor
const server = express();
//Conectando ao banco
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ke6rw.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
//Usando o cors
server.use(cors());
//Usando json nas rotas
server.use(express.json());
//Adicionando um modulo
server.use(routes);
//Liberando a porta de acesso
server.listen(3333);
