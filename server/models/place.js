let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PlaceSchema = Schema({
	username: { type: String, required: true },
	name: { type: String, default: '' },
	user: { type : Schema.ObjectId, ref : 'User' },
    createdAt: { type : Date, default : Date.now }
});

module.exports = mongoose.model( 'Place', PlaceSchema, 'places' );