const express = require("express");
const app = express();

const consign = require("consign");
const bodyParser = require("body-parser");

require("../database/connection.js");

app.use(bodyParser.urlencoded({extended: true}));

app.set("views", "./src/views/");

consign()
    .include("./src/controllers")
    .then("./src/routes")
    .into(app);


    
module.exports = app;