module.exports = app => {
	
	app.get('/places', (req, res) => {
		let places;
		res.json(places);
	});

	app.post('/createPlace', (req, res) => {
		console.log('CREATE Place')
		// let newPlaceSchema = new Schema(req.body);
		// let newPlaceModel = mongoose.model('place', newPlaceSchema);
		console.log(req.body);
		res.status(201).json({
			"message": "Place created",			
		});
	});

	app.get('/readPlace', (req, res) => {
		console.log('READ Place')
	});

	app.post('/updatePlace', (req, res) => {
		console.log('UPDATE Place')
	});

	app.post('/deletePlace', (req, res) => {
		console.log('DELETE Place')
		//.findByIdAndRemove(id).exec();
		res.status(200).json({
			"message": "Place removed",			
		});
	});
}