// TODO: Use path to make path strings
require('./config/database.js') ('localhost/localizar-ufjf');
let app = require('./config/express.js');
const door = 80;

app.listen(door, () => {
	console.log(' - Server running and listen on door ' + door + '...');
});