let modelContainer;
let camera, scene, renderer;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let manager = new THREE.LoadingManager();
let model;
init();
animate();

function init() {

	modelContainer = document.getElementById('model-container');
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = -40;

	// scene
	scene = new THREE.Scene();
	//scene.background = new THREE.Color( 0xe9e9e9 );
	let ambientLight = new THREE.AmbientLight( 0xffffff, 1.0 );
	scene.add( ambientLight );
	scene.add( camera );

	// texture
	manager.onProgress = ( item, loaded, total ) => {
		console.log( item, loaded, total );
	};
	let textureLoader = new THREE.TextureLoader( manager );
	let texture = textureLoader.load( 'models/hat_mario_color.png' );

	// model
	let onProgress = xhr => {
		if ( xhr.lengthComputable ) {
			let percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};
	let onError = xhr => {
	};
	let loader = new THREE.OBJLoader( manager );
	loader.load( 'models/hat_mario_model.obj', function ( object ) {
		object.traverse( function ( child ) {
			if ( child instanceof THREE.Mesh ) {
				child.material.map = texture;
			}
		} );
		object.position.x = 0;
		object.position.y = 0;
		object.position.z = 0;
		scene.add( object );
		model = object;
	}, onProgress, onError );

	renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( 255, 120 );
	modelContainer.appendChild( renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );

	animate();
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
	model.rotateY(0.02);
	camera.lookAt( scene.position );
	renderer.render( scene, camera );
}