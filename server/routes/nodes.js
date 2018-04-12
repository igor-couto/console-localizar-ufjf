module.exports = app => {

	app.get('/nodes', (req, res) => {
		let nodes;
		res.json(nodes);
	});

	app.get('/createNode', (req, res) => {
		console.log(CREATE Node)
	});

	app.get('/readNode', (req, res) => {
		console.log(READ Node)
		let node;
		res.json(node);
	});

	app.get('/updateNode', (req, res) => {
		console.log(UPDATE Node)
	});

	app.get('/deleteNode', (req, res) => {
		console.log(DELETE Node)
	});
}