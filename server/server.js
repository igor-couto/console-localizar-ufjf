const mongoose = require('mongoose');
const path = require('path');

let app = require('./config/express.js');

const dbLocation = 'mongodb://localhost/localizar-ufjf';
const door = 80;


// TODO: Organize database stuff in its own file
mongoose.connect(dbLocation);
let db = mongoose.connection;
db.once('open', () => {
	console.log(' - Connected to MongoDB');
});
db.on('error', console.error.bind(console, ' - MongoDB connection error:'));



app.listen(door, () => {
	console.log(' - Server running and listen on door ' + door + '...');
});