// TODO: Fonction qui ajoute une balise <p> dans la class message-box, de texte "user à dit:<br> message" 
function send_message(user, message) {
    let div = document.getElementById('message-box');
    let element_p = document.createElement('p');
    element_p.textContent= user + ' a dit:\n' + message;

    div.append(element_p);
}