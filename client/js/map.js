var markers = [];
var marker;
var map;
var newMarker;

let isShowingPlaces = true;
let isShowingNodes = false;

function initMap() {

    let UFJF = {lat: -21.7769499, lng: -43.3689823};

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: false,
        center: UFJF
    });

    marker = new google.maps.Marker({
        position: UFJF,
        draggable: true,
        map: map,
        title: 'UFJF'
    });

    var infowindow = new google.maps.InfoWindow({
        content: 'TESTE'
    });

    marker.addListener('click', function() {
        infowindow.open(marker.get('map'), marker);
    });

    // Adiciona controladores de visualização de lugares ou nós
    let placesAndNodesControlDiv = document.createElement('div');
    let placesAndNodesControl = new PlacesAndNodesControl(placesAndNodesControlDiv, map);

    placesAndNodesControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(placesAndNodesControlDiv);


    getPlaces();
}

function toggleAddPlaces(){
    map.addListener('click', function(event){
        addNewPlace(event.latLng);
    });
}

function addNewPlace(latLng){
    isCreating = true;
    newMarker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: true
    });

    var infowindow = new google.maps.InfoWindow({
        content: newPlaceContent
    });

    infowindow.open(map, newMarker);

    map.addListener('click', function(event){
        infowindow.close(newMarker.get('map'), newMarker);
        newMarker=null;
        hideMarkers();
        showMarkers();
        toggleAddPlaces();
    });
}

function registerNewPlace(){
    map.clearMarkers();
    markers.push(newMarker);
    // call server passing modification
    newMarker = null;
    toggleAddPlaces();
}

function showMarkers() {
    setMapOnAll(map);
}

function hideMarkers() {
    setMapOnAll(null);
}

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function deleteMarkers() {
    clearMarkers();
    markers = [];
}

function getPlaces() {
    // TODO: Replace this with server call to fill markers
    let locations = [
        ['Title A', -21.77567461,-43.39232825, 1],
        ['Title B', -21.77655635,-43.36763047, 2],
        ['Title C', -21.77724381,-43.37088667, 3]
    ];

    for (let i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            title: locations[i][0] ,
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            draggable: true
        });


        markers.push(marker);
    }
}