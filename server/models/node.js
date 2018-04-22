let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let nodeSchema = Schema({
	nodeID: 	{ type: Number, required: true },
	lat: 		{ type: String, required: true },
	lng: 		{ type: String, required: true },
	neighbors:  [{ type : Number }]
});

mongoose.model( 'Node', nodeSchema, 'nodes' );