let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let versionSchema = Schema({
	version: { type: String, required: true },
    modifiedAt: { type : Date, default : Date.now, required: true }
});

mongoose.model( 'Version', versionSchema , 'dbversion');