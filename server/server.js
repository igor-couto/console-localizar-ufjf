const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbLocation = 'mongodb://localhost/test';
const door = 666;

let app = express();

// mongoose.connect(dbLocation);
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// const Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
	// let newPlaceSchema = new Schema(req.body);
	// let newPlaceModel = mongoose.model('place', newPlaceSchema);
});

app.listen(door, () => {
	console.log('server running and listen on door ' + door);
});