function registerNewPlace(){

    let newPlace = {
        name :  nameField.val(),
        area :  areaField.val(),
        lat  :  latField.attr("placeholder"),
        lng  :  lngField.attr("placeholder"),
        info :  infoField.val()
    };
    let success = result => {
        let marker = copyMarker(newMarker);
        removeMarker(newMarker);
        marker.title = newPlace.name;
        marker.area = newPlace.area;
        marker.info = newPlace.info;
        marker.icon = 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png';
        markers.push(marker);
        // TODO: Don't go to server to fill places again
        //showPlaces();
        getPlaces();
        let message = 'Local ' + marker.title + ' cadastrado com sucesso';
        alertMessage.success(message);
    }
    let fail = (err, status) => {
        let message = 'Erro ao cadastrar: ' + status + err;
        alertMessage.error(message);
    }

    $.post( url + 'place', newPlace)
        .done( success() )
        .fail( (err,status) => {fail(err,status)} );
}

function editPlace(){

    let id = placeIdField.val();

    let newPlace = {
        name :  nameField.val(),
        area :  areaField.val(),
        lat  :  latField.attr("placeholder"),
        lng  :  lngField.attr("placeholder"),
        info :  infoField.val(),
        _id  :  id
    };

    $.ajax({
        url: url + 'place/' + id,
        type: 'PUT',
        data : newPlace,
        success: result => {
            let message = 'Edição realizada com sucesso!';
            alertMessage.success(message);
            clearPlaceForm();
            getPlaces();
        },
        error: (req, status, err ) => {
            let message = 'Não foi possivel editar: ' + status + err;
            alertMessage.error(message);
        }
    });
}

function deletePlace(){
    let id = placeIdField.val();
    $.ajax({ 
        url: url + 'place/' + id,
        type: 'DELETE',
        success: result => {
            let message = 'Lugar ' + nameField + ' excluido com sucesso.';
            alertMessage.error(message);
            removeMarkerById(id);
            clearPlaceForm();
        },
        error: (req, status, err ) => {
            let message = 'Não foi possivel deletar: ' + status + err;
            alertMessage.error(message);
        }
    });    
}