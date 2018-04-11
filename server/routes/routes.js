module.exports = app => {
	
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
		res.status(201).json({
			"message": "Place created",			
		});
	});

	app.post('/removePlace', (req, res) => {
		//.findByIdAndRemove(id).exec();
	});
}