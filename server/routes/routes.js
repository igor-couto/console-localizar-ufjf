const mongoose = require('mongoose');
const formidable = require('formidable');
const path = require('path');

module.exports = app => {

	app.get('/', (req, res) => {
		res.render('index');
	});

	app.get('/version', (req, res) => {
		let versionModel = mongoose.model('Version');
		versionModel
			.findOne()
			.then( version => res.status(201).json(version) , error => res.status(500) );
	});

	app.post('/newModel', (req, res) => {
        let form = new formidable.IncomingForm();
        let files = [];
        const savePath = path.join('./','views', 'models');

        let modelinfo = new Object();
        let textures = [];

        form
            .on('file', (field, file) => {
                files.push(file);
            })
            .on('end',  () => {
                files.forEach( newfile => {
                    let tempPath = String(newfile.path);
                    let newpath = path.join(savePath, newfile.name);
                    fs.rename(tempPath, newpath, err => { if (err) throw err; });

                    let extension = path.extname(newfile.name);
                    console.log(' - Extension: ' + extension);
                    if ( extension === '.png' || extension === '.jpg') {
                        textures.push(newfile.name);
                        console.log(' - Texture found: ' + newfile.name);
                    } else
                    if ( extension === '.obj'  ) {
                        console.log('- Obj found: '+ newfile.name);
                        modelinfo.modelname = newfile.name; // TODO: Remove extension;
                        modelinfo.extension = extension;
                    }
                    console.log('- Upload of ' + newfile.name + ' done at ' + savePath);
                });

                modelinfo.textures = textures;

                let modelJSONstring= JSON.stringify(modelinfo);
                const generatedURL = path.join('./','views', 'display', modelinfo.folder ,modelinfo.name);
                response.render('display/display', { name : modelinfo.name, modelName : modelinfo.modelname, textures : modelinfo.textures } );
            });
        form.parse(req);
	});

	app.post('/newIcon', (req, res) => {
		
	});
}