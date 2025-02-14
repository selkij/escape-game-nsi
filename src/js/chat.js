// Ajoute un message dans la messagerie.
function sendMessage(user, message) {
    let div = document.getElementById('message-box');
    let element_p = document.createElement('p');
    element_p.textContent = `(${user}): ${message}`;

    div.append(element_p);
    div.scrollTop = div.scrollHeight;
}