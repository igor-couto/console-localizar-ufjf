let deleteNodeButton  = $('#delete-node-button');
let editNodeButton    = $('#edit-node-button');

let nodeIdField    = $('#place-id');
let nodeNameField  = $('#name-nome');
let latNodeField   = $('#lat-node');
let lngNodeField   = $('#lng-node');

let inspectNodesPill = $('#inspect-node-pill');
let newNodesPill     = $('#new-node-pill');

function toggleCreateNodes() {
    newNodesPill.addClass('active').siblings().removeClass('active');  
    clearNodeForm();
    google.maps.event.clearListeners(map, 'click');

    removeMarker(newNodeMarker);

    //markers.forEach(marker => unmakeMarkerDraggable(marker));

    newNodeMarker = new google.maps.Marker({
        position: map.getCenter(),
        draggable: true,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Novo Nó',
        opacity: 0.85,
        icon: '/img/node.png',
        zIndex: 10
    });

    latNodeField.attr("placeholder", newNodeMarker.position.lat );
    lngNodeField.attr("placeholder", newNodeMarker.position.lng );

    newNodeMarker.addListener('drag', () => {
        latNodeField.attr("placeholder", newNodeMarker.position.lat );
        lngNodeField.attr("placeholder", newNodeMarker.position.lng );
    });

    let infowindow = new google.maps.InfoWindow({
        content: 'Novo Lugar'
    });

    newNodeMarker.addListener('click', () => infowindow.open(newNodeMarker.get('map'), newNodeMarker) );

    deleteNodeButton.hide();
    editNodeButton.hide();
}

function toggleInspectNodes() {
    inspectNodesPill.addClass('active').siblings().removeClass('active');
    nodes.forEach( node => {
        //makeMarkerDraggable(marker);
        //makeMarkerInspectable(marker);
    });

    removeNode(newNodeMarker);
    deleteNodeButton.show();
    editNodeButton.show();
}