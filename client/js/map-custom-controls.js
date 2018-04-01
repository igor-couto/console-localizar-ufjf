function PlacesAndNodesControl(controlDiv, map) {

    controlDiv.style.marginTop = '5px';
    controlDiv.style.marginRight = '5px';

    // Set CSS for the places control border.
    let placesControlUI = document.createElement('div');
    placesControlUI.style.backgroundColor = '#fff';
    placesControlUI.style.border = '2px solid #fff';
    placesControlUI.style.borderRadius = '3px';
    placesControlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    placesControlUI.style.cursor = 'pointer';
    placesControlUI.style.marginBottom = '3px';
    placesControlUI.style.textAlign = 'center';
    placesControlUI.title = 'Clique para mostrar os lugares';
    controlDiv.appendChild(placesControlUI);

    // Set CSS for the places control interior.
    let placesControlText = document.createElement('div');
    placesControlText.style.color = 'rgb(25,25,25)';
    placesControlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    placesControlText.style.fontSize = '16px';
    placesControlText.style.lineHeight = '38px';
    placesControlText.style.paddingLeft = '5px';
    placesControlText.style.paddingRight = '5px';
    placesControlText.style.fontWeight = 'bold';
    placesControlText.innerHTML = 'Mostrar Lugares';
    placesControlUI.appendChild(placesControlText);

    // Set CSS for the nodes control border.
    let nodesControlUI = document.createElement('div');
    nodesControlUI.style.backgroundColor = '#fff';
    nodesControlUI.style.border = '2px solid #fff';
    nodesControlUI.style.borderRadius = '3px';
    nodesControlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    nodesControlUI.style.cursor = 'pointer';
    nodesControlUI.style.marginBottom = '3px';
    nodesControlUI.style.textAlign = 'center';
    nodesControlUI.title = 'Clique para mostrar os nós';
    controlDiv.appendChild(nodesControlUI);


    // Set CSS for the nodes control interior.
    let nodesControlText = document.createElement('div');
    nodesControlText.style.color = 'rgb(25,25,25)';
    nodesControlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    nodesControlText.style.fontSize = '16px';
    nodesControlText.style.lineHeight = '38px';
    nodesControlText.style.paddingLeft = '5px';
    nodesControlText.style.paddingRight = '5px';
    nodesControlText.innerHTML = 'Mostrar Nós';
    nodesControlUI.appendChild(nodesControlText);

    placesControlUI.addEventListener('click', function () {
        if (isShowingPlaces){
            placesControlText.style.fontWeight = 'normal';
            hideMarkers();
        } else {
            placesControlText.style.fontWeight = 'bold';
            showMarkers();
        }
        isShowingPlaces = !isShowingPlaces;
    });

    nodesControlUI.addEventListener('click', function () {
        if (isShowingNodes){
            nodesControlText.style.fontWeight = 'normal';
        } else {
            nodesControlText.style.fontWeight = 'bold';
        }
        isShowingNodes = !isShowingNodes;
    });
}