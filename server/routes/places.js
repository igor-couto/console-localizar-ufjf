// TODO: handle erros in a proper way
const mongoose = require('mongoose');

module.exports = app => {

	const placesModel = mongoose.model('Place');
	
	app.get('/places', (req, res) => {
		placesModel
			.find({})
			.then( places => res.json(places) , error => res.status(500).json(error));
	});

	app.post('/place', (req, res) => {
		if(validatePlace(req.body)){
			placesModel
				.create(req.body)
				.then( place => res.json(place) , error => res.status(500).json(error));
		} else{
			res.status(400);
		}
	});

	// READ place. Will be used?
	app.get('/place/:id', (req, res) => {
		placesModel
			.findById(req.params.id)
			.then( 	 place => {
								if(!place) throw Error('Place not found'); 
								res.json(places); 
							  },
					 error => res.status(500).json(error));
	});

	app.put('/place/:id', (req, res) => {
		placesModel
			.findByIdAndUpdate(req.params.id, req.body) // Verify how to obtain the id
			.then( place => res.json(place) , error => res.status(500).json(error));
	});

	app.delete('/place/:id', (req, res) => {
		placesModel
			.remove({ _id : req.params.id})
			.then( () => res.sendStatus(204) , error => res.status(500).json(error));
	});

	// Make it better
	function validatePlace(place){
		if( place.hasOwnProperty('name') &&
			place.hasOwnProperty('area') && 
			place.hasOwnProperty('lat')  &&
			place.hasOwnProperty('lng')  ){

			if(place.name !== "" && place.lat !== "" && place.lng !== "" && place.area !== "" )
				return true;
			else
				return false;
		}
	}
}