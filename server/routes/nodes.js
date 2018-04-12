module.exports = app => {

	app.get('/nodes', (req, res) => {
		let nodes;
		res.json(nodes);
	})

/*	
	app.route('/node/:id')
		.create( ()=>{} )
		.read( ()=>{} )
		.update( ()=>{} )
		.delete( ()=>{} )
*/

	app.create('/node', (req, res) => {

	});

	app.read('/node/:id', (req, res) => {

	});

	app.update('/node', (req, res) => {

	});

	app.delete('/node/:id', (req, res) => {

	});
}