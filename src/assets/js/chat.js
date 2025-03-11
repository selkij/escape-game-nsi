let notification = new Audio("assets/audio/chat_notification.mp3");
let sendSound = new Audio("assets/audio/keyboard_enter.mp3");

/**
 * Ajoute un message dans la messagerie.
 * @param user Nom d'utilisateur utilisé
 * @param message Message à transmettre
 * @param offsetTime Envoyer le message après un temps offsetTime en millisecondes
 */
function sendMessage(user, message, offsetTime = 0) {
    let div = document.getElementById("message-history");
    let element_p = document.createElement("p");
    element_p.textContent = `(${user}): ${message}`;

    setTimeout(() => {
        user !== "Vous" ? notification.play() : sendSound.play();

        div.append(element_p);
        div.scrollTop = div.scrollHeight;
    }, offsetTime);

    if(message === "L2r1Yh2Vp3FhLQJZy7TGnM3B2XAoTnD7x5uGvFj6K5Zr9Z9Y9X9Z") {
        setTimeout(() => {
            finished = true;
        })
    }
}
