let modelContainer;
let camera, scene, renderer;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let manager = new THREE.LoadingManager();
let currentModel;
let models = new Array();
let modelsList = ['Pin'];
init();

function init() {

	modelContainer = document.getElementById('model-container');
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
	camera.position.z = -40;

	// scene
	scene = new THREE.Scene();
	//scene.background = new THREE.Color( 0xe9e9e9 );
	let ambientLight = new THREE.AmbientLight( 0xffffff, 1.0 );
	scene.add( ambientLight );
	scene.add( camera );

	loadModels();


	renderer = new THREE.WebGLRenderer({ alpha: true, antialias:true });
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( 255, 120 );
	modelContainer.appendChild( renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );

	animate();
}

function loadModels() {

	let textureLoader = new THREE.TextureLoader( manager );
	let loader = new THREE.OBJLoader( manager );
	let onProgress = xhr => {};
	let onError = xhr => { console.log('Erro ao baixar modelo 3D'); };

	modelsList.forEach( modelName => {
		let texture = textureLoader.load( 'models/' + modelName + '-texture.png' );

		loader.load( 'models/' + modelName +'.obj', object => {
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh ) child.material.map = texture;
			});
			models.push(object);
			currentModel = models[0];
			scene.add(currentModel);
		}, onProgress, onError );
	});

}

function selectModel(modelName) {

}

function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( 255 ,120 );
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
	currentModel.rotateY(0.02);
	camera.lookAt( scene.position );
	renderer.render( scene, camera );
}