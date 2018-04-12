let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let placeSchema = Schema({
	placeID:{ type: Number, required: true },
	name: 	{ type: String, required: true },
	lat: 	{ type: String, required: true },
	lng: 	{ type: String, required: true },
	info: 	{ type: String }
	//user: 	{ type : Schema.ObjectId, ref : 'User' },
});

mongoose.model( 'Place', placeSchema, 'places' );