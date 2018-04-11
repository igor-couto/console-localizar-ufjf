const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbLocation = 'mongodb://localhost/localizar-ufjf';
const door = 80;

let app = express();

// TODO: Organize database stuff in its own file
mongoose.connect(dbLocation);
let db = mongoose.connection;
db.once('open', () => {
	console.log(' - Connected to MongoDB');
});
db.on('error', console.error.bind(console, ' - MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(door, () => {
	console.log(' - Server running and listen on door ' + door + '...');
});