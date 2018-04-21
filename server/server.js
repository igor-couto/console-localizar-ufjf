let app = require('./config/express.js');
require('./config/database.js') ('localhost/localizar-ufjf');
const door = 80;

app.listen(door, () => {
	console.log(' - Server running and listen on door ' + door + '...');
});