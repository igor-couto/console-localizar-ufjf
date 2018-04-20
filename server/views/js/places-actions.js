function registerNewPlace(){

    let newPlace = {
        name :  nameField.val(),
        area :  areaField.val(),
        lat  :  latField.attr("placeholder"),
        lng  :  lngField.attr("placeholder"),
        info :  infoField.val()
    };
    let success = () => {
        let marker = copyMarker(newMarker);
        newMarker = null;
        marker.title = newPlace.name;
        marker.area = newPlace.area;
        marker.info = newPlace.info;
        marker.icon = 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png';
        markers.push(marker);
        clearPlaceForm();
        // TODO: Don't go to server to fill places again
        //showPlaces();
        getPlaces();
        console.log('Local cadastrado com sucesso: ' + marker);
    }
    let fail = (err, status) => {
        console.log('Erro ao fazer post: ' + err + status);
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
            console.log('Edicao feita com sucesso!');
            clearPlaceForm();
            getPlaces();
        },
        error: (req, status, err ) => {
            console.log('Erro ao atualizar!');
            console.log(status);
            console.log(err);
        }
    });
}

function deletePlace(){
    let id = placeIdField.val();

    $.ajax({ 
        url: url + 'place/' + id,
        type: 'DELETE',
        success: (result) => {
            console.log('Lugar excluido com sucesso.');
            markers.forEach( (marker, id) => {
                if(marker._id === id){
                    marker.setMap(null);
                    delete markers[marker.index];
                    clearPlaceForm();
                    getPlaces();
                }
            });
        },
        error: (req, status, err ) => {
            console.log('Erro ao deletar!');
            console.log(status);
            console.log(err);
        }
    });    
}