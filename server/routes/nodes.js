const mongoose = require('mongoose');

module.exports = app => {

	app.get('/nodes', (req, res) => {
		let nodes;
		res.json(nodes);
	})

/*	
	app.route('/node/:id')
		.post( ()=>{} )
		.get( ()=>{} )
		.put( ()=>{} )
		.delete( ()=>{} )
*/

	app.post('/node', (req, res) => {
		console.log('CREATE Node')
	});

	app.get('/node/:id', (req, res) => {
		console.log('READ Node')
	});

	app.put('/node', (req, res) => {
		console.log('UPDATE Node')
	});

	app.delete('/node/:id', (req, res) => {
		console.log('DELETE Node')
	});
}