let modelContainer;
let camera, scene, renderer;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
init();
animate();

function init() {

	modelContainer = document.getElementById('model-container');
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
	camera.position.z = 250;

	// scene
	scene = new THREE.Scene();
	let ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
	scene.add( ambientLight );
	scene.add( camera );

	// texture
	let manager = new THREE.LoadingManager();
	manager.onProgress = function ( item, loaded, total ) {
		console.log( item, loaded, total );
	};
	let textureLoader = new THREE.TextureLoader( manager );
	let texture = textureLoader.load( 'textures/UV_Grid_Sm.jpg' );

	// model
	let onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			let percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};
	let onError = function ( xhr ) {
	};
	let loader = new THREE.OBJLoader( manager );
	loader.load( 'models/obj/male02/male02.obj', function ( object ) {
		object.traverse( function ( child ) {
			if ( child instanceof THREE.Mesh ) {
				child.material.map = texture;
			}
		} );
		object.position.y = - 95;
		scene.add( object );
	}, onProgress, onError );

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( 260, 120 );
	modelContainer.appendChild( renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( 260 ,120 );
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

function render() {
	camera.lookAt( scene.position );
	renderer.render( scene, camera );
}