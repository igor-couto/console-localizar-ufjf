module.exports = app => {
	
	app.get('/', (req, res) => {
		res.render('index');
	});

	app.get('/version', (req, res) => {
		res.status(200).json({
			"version": "",			
		});
	});
}