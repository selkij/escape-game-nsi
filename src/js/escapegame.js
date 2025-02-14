/**
 * Commence l'escape game
 */
function startGame() {
    let chatFrame = document.getElementById('chat-frame');

    document.getElementById("timer-frame").contentWindow.startTimer();

    chatFrame.contentWindow.sendMessage('Anonyme','Rends moi un service, rentre cette adresse IP dans le terminal. ' +
        'Cela te donneras les accès à un porte-monnaie virtuel de 45 Bitcoins.');
    chatFrame.contentWindow.sendMessage('Anonyme','Tu as 1 heure.');
    chatFrame.contentWindow.sendMessage('Anonyme','203.45.67.89')

}

window.addEventListener('load', startGame);