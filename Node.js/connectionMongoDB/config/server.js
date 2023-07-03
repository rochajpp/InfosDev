const express = require('express');
const app = express();

const consign = require('consign');
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("./app/public"));
app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include("./config/dbConnection.js")
    .then("./app/controllers")
    .then("./app/routes")
    .then("./app/models")
    .into(app);

module.exports = app;