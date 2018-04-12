module.exports = app => {
	
	app.get('/places', (req, res) => {
		let places;
		res.json(places);
	});

	app.create('/place', (req, res) => {
		// let newPlaceSchema = new Schema(req.body);
		// let newPlaceModel = mongoose.model('place', newPlaceSchema);
		console.log(req.body);
		res.status(201).json({
			"message": "Place created",			
		});
	});

	app.read('/place', (req, res) => {

	});

	app.update('/place', (req, res) => {

	});

	app.delete('/place', (req, res) => {
		//.findByIdAndRemove(id).exec();
		res.status(200).json({
			"message": "Place removed",			
		});
	});
}