let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let NodeSchema = Schema({
	nodeID: { type: String, required: true },
	neighbors: { type : Schema.ObjectId, ref : 'User' }
});

module.exports = mongoose.model( 'Node', NodeSchema, 'nodes' );