import webpack from 'webpack';
import config from './webpack.config.dev';
const compiler = webpack(config);
const bodyParser = require('body-parser');
const consign = require('consign');
const path = require('path');
const express = require('express');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join('./', 'views')));
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

consign()
    .include('models')
    .then('routes')
    .into(app);

module.exports = app;