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


app.listen(door, () => {
	console.log('server running and listen on door ' + door);
});