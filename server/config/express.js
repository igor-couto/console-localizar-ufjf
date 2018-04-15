import webpack from 'webpack';
import config from './webpack.config';
const compiler = webpack(config);
const bodyParser = require('body-parser');
const consign = require('consign');
const path = require('path');
const express = require('express');
const app = express();


app.use(require('webpack-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join('./', 'views')));

consign()
    .include('models')
    .then('routes')
    .into(app);

module.exports = app;