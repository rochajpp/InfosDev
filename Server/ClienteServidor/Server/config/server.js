const express = require('express');
const app = express();

const consign = require('consign');
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include("./app/routes")
    .then("./app/controllers")
    .then("./app/models")
    .into(app);

module.exports = app;

