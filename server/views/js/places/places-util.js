function clearPlaceForm(){
    nameField.val("");
    areaField.val("");
    latField.attr("placeholder", "");
    lngField.attr("placeholder", "");
    infoField.val("");
}

function removeMarker(markerToRemove){
    if(markerToRemove){    
        markerToRemove.setMap(null);
        markers = markers.filter( marker => marker._id !== markerToRemove._id );
        markerToRemove = null;
    }
}

function removeMarkerById(id){
    let markerToRemove = markers.find( (marker) => marker.placeID === id );
    removeMarker(markerToRemove);
}

function showPlaces() {
    markers.forEach( marker => marker.setMap(map));
}

function hidePlaces() {
    markers.forEach( marker => marker.setMap(null));
}

function copyMarker(marker){
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

function getPlaces() {

    let fillPlaces = places => {
        places.forEach( place => {
            let marker = new google.maps.Marker({
                title: place.name ,
                position: new google.maps.LatLng(place.lat, place.lng),
                map: map,
                draggable: false,
                info: place.info,
                area : place.area,
                placeID : place._id
            });

            let infowindow = new google.maps.InfoWindow({
                content: place.name
            });
            marker.addListener('click', () => {
                infowindow.open(map, marker);
                setTimeout( () => infowindow.close(), 5000);
            });

            markers.push(marker);
        });
    };

    $.get ( url + 'places', (data, status) => fillPlaces(data))
        .fail( (err, status) => console.log('Erro ao buscar os lugares'));
}

function makeMarkerDraggable(marker){
        markers.forEach( marker => {
            marker.setMap(null);
        });

        marker.draggable = true;

        google.maps.event.addListener(marker, 'drag', () => {
            latField.attr("placeholder", marker.position.lat );
            lngField.attr("placeholder", marker.position.lng );
        });

        markers.forEach( marker => {
            marker.setMap(map);
        });
}

function unmakeMarkerDraggable(){
        markers.forEach( marker => {
            marker.setMap(null);
        });

        marker.draggable = false;

        markers.forEach( marker => {
            marker.setMap(map);
        });
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