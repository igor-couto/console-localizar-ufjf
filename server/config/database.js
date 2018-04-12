module.exports = uri => {

	const mongoose = require('mongoose');

	mongoose.connect('mongodb://' + uri);
	let db = mongoose.connection;

	db.on('open', () => {
		console.log(' - Connected to MongoDB');
	});

	db.on('error', () => {
		console.log(' - MongoDB connection error.');
	});

	db.on('disconnected', () => {
		console.log(' - MongoDB disconected.');
	});


	process.on('SIGINT', () => {
		mongoose.connection.close( ()=> {
			console.log(' - Connection closed by application ending.');
			process.exit(0);
		});
	});
}