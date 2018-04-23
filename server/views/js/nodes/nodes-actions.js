function registerNewNode(){

    let newNode = {
        name :  nameField.val(),
        lat  :  latField.attr("placeholder"),
        lng  :  lngField.attr("placeholder"),
    };
    let success = result => {
        let marker = copyMarker(newMarker);
        removeNode(newMarker);
        marker.title = newNode.name;
        marker.area = newNode.area;
        marker.info = newNode.info;
        marker.icon = 'img/node.png';
        markers.push(marker);
        // TODO: Don't go to server to fill places again
        //showPlaces();
        getNodes();
        let message = 'Local ' + marker.title + ' cadastrado com sucesso';
        alertMessage.success(message);
        toggleInspectPlaces();
    }
    let fail = (err, status) => {
        let message = 'Erro ao cadastrar: ' + status + err;
        alertMessage.error(message);
    }

    $.post( url + 'node', newNode)
        .done( success() )
        .fail( (err,status) => {fail(err,status)} );
}

function editNode(){

    let id = placeIdField.val();

    let newNode = {
        name :  nameField.val(),
        lat  :  latField.attr("placeholder"),
        lng  :  lngField.attr("placeholder"),
        _id  :  id
    };

    $.ajax({
        url: url + 'node/' + id,
        type: 'PUT',
        data : newNode,
        success: result => {
            let message = 'Edição realizada com sucesso!';
            alertMessage.success(message);
            getPlaces();
        },
        error: (req, status, err ) => {
            let message = 'Não foi possivel editar: ' + status + err;
            alertMessage.error(message);
        }
    });
}

function deleteNodes(){
    let id = placeIdField.val();
    $.ajax({ 
        url: url + 'node/' + id,
        type: 'DELETE',
        success: result => {
            let message = 'Lugar ' + nameField + ' excluido com sucesso.';
            alertMessage.success(message);
            removeMarkerById(id);
            clearPlaceForm();
        },
        error: (req, status, err ) => {
            let message = 'Não foi possivel deletar: ' + status + err;
            alertMessage.error(message);
        }
    });    
}