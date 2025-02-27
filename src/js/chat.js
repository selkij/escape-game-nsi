let notification = new Audio('chat_notification.mp3');
let sendSound = new Audio('keyboard_enter.mp3');

/**
 * Ajoute un message dans la messagerie.
 * @param user Nom d'utilisateur utilisé
 * @param message Message à transmettre
 * @param offsetTime Envoyer le message après un temps offsetTime en millisecondes
 */
function sendMessage(user, message, offsetTime = 0) {
    let div = document.getElementById('message-history');
    let element_p = document.createElement('p');
    element_p.textContent = `(${user}): ${message}`;

    setTimeout(() => {
        user !== "Vous" ? notification.play() : sendSound.play();

        div.append(element_p);
        div.scrollTop = div.scrollHeight;
    }, offsetTime)
}