let createButton    = $('#create-button');
let deleteButton    = $('#delete-button');
let editButton      = $('#edit-button');

let placeIdField    = $('#place-id');
let nameField       = $('#name');
let areaField       = $('#area');
let latField        = $('#lat');
let lngField        = $('#lng');
let infoField       = $('#info');

let inspectPlacesPill = $('#inspect-place-pill');
let newPlacesPill = $('#new-place-pill');

function toggleCreatePlaces() {
    newPlacesPill.addClass('active').siblings().removeClass('active');  
    clearPlaceForm();
    google.maps.event.clearListeners(map, 'click');

    removeMarker(newMarker);

    //markers.forEach(marker => unmakeMarkerDraggable(marker));

    newMarker = new google.maps.Marker({
        position: map.getCenter(),
        draggable: true,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Novo Lugar',
        opacity: 0.85,
        icon: '/img/new-place-pin.png',
        zIndex: 10
    });

    latField.attr("placeholder", newMarker.position.lat );
    lngField.attr("placeholder", newMarker.position.lng );

    newMarker.addListener('drag', () => {
        latField.attr("placeholder", newMarker.position.lat );
        lngField.attr("placeholder", newMarker.position.lng );
    });

    let infowindow = new google.maps.InfoWindow({
        content: 'Novo Lugar'
    });

    newMarker.addListener('click', () => infowindow.open(newMarker.get('map'), newMarker) );

    createButton.show();
    deleteButton.hide();
    editButton.hide();
}

function toggleInspectPlaces() {
    inspectPlacesPill.addClass('active').siblings().removeClass('active');
    markers.forEach( marker => {
        makeMarkerDraggable(marker);
        makeMarkerInspectable(marker);
    });

    removeMarker(newMarker);
    createButton.hide();
    deleteButton.show();
    editButton.show();
}