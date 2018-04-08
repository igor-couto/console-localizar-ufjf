const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const dblocation = 'mongodb://localhost/test';

let app = express();

// mongoose.connect(dblocation);
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes:

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/places', (req, res) => {
	let places;
	res.json(places);
});

app.get('/version', (req, res) => {
	res.write();
});

app.post('/newPlace', (req, res) => {

});
