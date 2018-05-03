const mongoose = require('mongoose');

module.exports = app => {

	app.get('/', (req, res) => {
		res.render('index');
	});

	app.get('/version', (req, res) => {
		let versionModel = mongoose.model('Version');
		versionModel
			.findOne()
			.then( version => res.status(201).json(version) , error => res.status(500) );
	});

}