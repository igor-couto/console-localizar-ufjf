const mongoose = require('mongoose');

module.exports = app => {

	const placesModel = mongoose.model('Place');
	
	app.get('/places', (req, res) => {
		placesModel
			.find({})
			.then( places => res.json(places) , error => res.status(500).json(error));
	});

	app.post('/place', (req, res) => {
		placesModel
			.create(req.body)
			.then( place => res.json(place) , error => res.status(500).json(error));
	});

	app.get('/place/:id', (req, res) => {
		placesModel
			.findById(req.params.id)
			.then( 	 place => {
								if(!place) throw Error('Place not found'); 
								res.json(places); 
							  },
					 error => res.status(500).json(error));
	});

	app.put('/place', (req, res) => {
		placesModel
			.findByIdAndUpdate(req.params.id, req.body) // Verify how to obtain the id
			.then( place => res.json(place) , error => res.status(500).json(error));
	});

	app.delete('/place/:id', (req, res) => {
		placesModel
			.remove({ placeID : req.params.id})
			.then( () => res.sendStatus(204) , error => res.status(500).json(error));
	});
}