let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let VersionSchema = Schema({
	version: { type: String, required: true },
    modifiedAt: { type : Date, default : Date.now, required: true }
});

module.exports = mongoose.model( 'Version', VersionSchema, 'dbversion' );