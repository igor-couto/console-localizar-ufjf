let createButton    = $('#create-button');
let deleteButton    = $('#delete-button');
let editButton      = $('#edit-button');

let placeIdField    = $('#place-id');
let nameField       = $('#name');
let areaField       = $('#area');
let areaTextField   = $('#area-text');
let latField        = $('#lat');
let lngField        = $('#lng');
let infoField       = $('#info');


function toggleViewPlaces() {

    markers.forEach( marker => makeMarkerInspectable(marker) );

    removeMarker(newMarker);
    clearPlaceForm();
    areaTextField.show();
    areaField.hide();
    nameField.prop("readonly", true);
    infoField.prop("readonly", true);

    editButton.hide();
    deleteButton.hide();
    createButton.hide();
}

function toggleCreatePlaces() {

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
        icon: '/img/new-place-pin.png'
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

    nameField.prop("readonly", false);
    infoField.prop("readonly", false);
    areaTextField.hide();
    areaField.show();
    deleteButton.hide();

    createButton.show();
    deleteButton.hide();
    editButton.hide();
}

function toggleEditPlaces() {
    clearPlaceForm();
    markers.forEach( marker => {
        makeMarkerDraggable(marker);
        makeMarkerInspectable(marker);
    });

    removeMarker(newMarker);
    nameField.prop("readonly", false);
    infoField.prop("readonly", false);
    nameField.prop("readonly", false);
    areaTextField.hide();
    areaField.show();
    deleteButton.show();

    createButton.hide();
    deleteButton.show();
    editButton.show();
}