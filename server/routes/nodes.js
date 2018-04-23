const mongoose = require('mongoose');

module.exports = app => {

	const nodeModel = mongoose.model('Node');

	app.get('/nodes', (req, res) => {
		nodeModel
			.find({})
			.then( nodes => res.json(nodes) , error => res.status(500).json(error));
	})

	app.post('/node', (req, res) => {
		nodeModel
			.create(req.body)
			.then( node => res.json(node) , error => res.status(500).json(error));
	});

	app.get('/node/:id', (req, res) => {
		nodeModel
			.findById(req.params.id)
			.then( 	 node => {
								if(!node) throw Error('Node not found'); 
								res.json(places); 
							  },
					 error => res.status(500).json(error));
	});

	app.put('/node/:id', (req, res) => {
		nodeModel
			.findByIdAndUpdate(req.params.id, req.body)
			.then( node => res.json(node) , error => res.status(500).json(error));
	});

	app.delete('/node/:id', (req, res) => {
		nodeModel
			.remove({ nodeID : req.params.id})
			.then( () => res.sendStatus(204) , error => res.status(500).json(error));
	});
}