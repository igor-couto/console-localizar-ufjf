function clearNodeForm(){
    nodeNameField.val("");
    latNodeField.attr("placeholder", "");
    lngNodeField.attr("placeholder", "");
}

function removeNode(markerToRemove){
    if(markerToRemove){    
        markerToRemove.setMap(null);
        markers = markers.filter( marker => marker._id !== markerToRemove._id );
        markerToRemove = null;
    }
}

function removeNodeMarkerById(id){
    let markerToRemove = markers.find( (marker) => marker.placeID === id );
    removeMarker(markerToRemove);
}

function showNodes() {
    markers.forEach( marker => marker.setMap(map));
}

function hideNodes() {
    markers.forEach( marker => marker.setMap(null));
}

function copyNodeMarker(marker){
    let newCopyMarker = {
        title: marker.name,
        position: new google.maps.LatLng(marker.lat, marker.lng),
        map: map,
        draggable: false,
        info: marker.info,
        area : marker.area
    }
    return new google.maps.Marker(newCopyMarker);
}

function getNodes() {
    let fillNodes = nodes => {
        nodes.forEach( node => {
            let marker = new google.maps.Marker({
                title: node.nodeID,
                position: new google.maps.LatLng(node.lat, node.lng),
                map: map,
                draggable: false,
                nodeID : node._id,
                icon: '/img/node.png',
                neighbors: node.neighbors
            });

            let infowindow = new google.maps.InfoWindow({
                content: node.name
            });
            marker.addListener('click', () => {
                infowindow.open(map, marker);
                setTimeout( () => infowindow.close(), 8000);
            });

            markers.push(marker);
        });
    };

    $.get ( url + 'nodes', (data, status) => fillNodes(data))
       .fail( (err, status) => alertMessage.error('Erro ao buscar os lugares: ' + status + ' ' + error));   
}

function makeMarkerInspectable(marker){
    marker.addListener('click', () => {
        nameField.val(marker.title);
        areaField.val(marker.area);
        latField.attr("placeholder", marker.position.lat);
        lngField.attr("placeholder", marker.position.lng);
        infoField.val(marker.info);
        placeIdField.val(marker.placeID);
    });
}