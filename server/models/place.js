let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let placeSchema = Schema({
	name: 	{ type: String, required: true },
	area: 	{ type: String, required: true},
	//area: 	{ type: Schema.ObjectId, ref: 'Area' },
	icon: {type : String, required: false},
	lat: 	{ type: String, required: true },
	lng: 	{ type: String, required: true },
	info: 	{ type: String }
});

mongoose.model( 'Place', placeSchema, 'places' );