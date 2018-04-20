let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let placeSchema = Schema({
	placeID:{ type: Number, required: false }, // should be true
	name: 	{ type: String, required: true },
	area: 	{ type: String, required: true},
	//area: 	{ type: Schema.ObjectId, ref: 'Area' },
	lat: 	{ type: String, required: true },
	lng: 	{ type: String, required: true },
	info: 	{ type: String }
});

mongoose.model( 'Place', placeSchema, 'places' );