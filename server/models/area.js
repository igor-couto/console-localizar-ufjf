let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let areaSchema = Schema({
	name: 	{ type: String, required: true }
});

mongoose.model( 'Area', areaSchema, 'areas' );