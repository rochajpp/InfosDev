//Chamando o servidor
const express = require('express');
const app = express();

//Chamando bibliotecas
const consign = require('consign');

//Middleware
app.use(express.static("./app/public"));

//Configurando consign
consign()
    .include("./app/routes")
    .then("./app/controllers")
    .into(app);

module.exports = app;