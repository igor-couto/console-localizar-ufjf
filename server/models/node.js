let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let nodeSchema = Schema({
	nodeID: { type: Number, required: true },
	//neighbors: { type : Schema.ObjectId, ref : 'User' }
});

mongoose.model( 'Node', nodeSchema, 'nodes' );