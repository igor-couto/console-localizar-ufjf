let messageBox = $('#message-box');
let alertMessage = () => {};

alertMessage.error = (message) => {
	showMessage('Erro: ', message, 'alert-danger');
}

alertMessage.success = (message) => {
	showMessage('Sucesso: ', message, 'alert-success');
}

function showMessage(title, message, alertType){
	messageBox.html(`
        <div class="alert ` + alertType + ` alert-dismissible fade in">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong">`+ title + `</strong><span>` + message + `</span>
        </div>
    `);
    
    setTimeout( () => messageBox.children().remove(), 3000);
}