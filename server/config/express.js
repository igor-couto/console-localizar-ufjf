const bodyParser = require('body-parser');
const consign = require('consign');
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join('./', 'views')));

consign()
    .include('routes')
    .into(app);

module.exports = app;