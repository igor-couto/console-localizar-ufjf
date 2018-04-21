let markers = [];
let map;
let newMarker;

let isShowingPlaces = true;
let isShowingNodes = false;

const UFJF = {lat: -21.7769499, lng: -43.3689823};
const url = 'http://localhost/';

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: false,
        center: UFJF
    });

    map.setClickableIcons(false);

    // Adiciona controladores de visualização de lugares ou nós
    let placesAndNodesControlDiv = document.createElement('div');
    let placesAndNodesControl = new PlacesAndNodesControl(placesAndNodesControlDiv, map);

    placesAndNodesControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(placesAndNodesControlDiv);
    
    getPlaces();
    $(document).ready(toggleInspectPlaces());
}