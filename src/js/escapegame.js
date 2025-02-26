/**
 * Commence l'escape game
 */
function startGame() {
    let chatFrame = document.getElementById('chat-frame');
    let browserFrame = document.getElementById('browser-frame');
    let browserFrameContent = browserFrame.contentWindow.document.getElementById('browser-frame');

    chatFrame.contentWindow.sendMessage('Vous', 'Qui êtes-vous?', 2000);

    chatFrame.contentWindow.sendMessage('Anonyme', 'Tu ne me connais pas, mais moi, je te connais suffisamment pour savoir que tu es capable de relever un défi d\'une importance capitale.', 5000);
    chatFrame.contentWindow.sendMessage('Vous', 'Quoi?', 7000);
    chatFrame.contentWindow.sendMessage('Anonyme', 'Voici ta mission : Il y a une machine. Rien de particulier à l’œil nu, mais en son sein se trouve un fichier nommé "wallet_access.txt". Ce fichier est la clé d\'un porte-monnaie contenant 45 bitcoins.', 10000);
    chatFrame.contentWindow.sendMessage('Anonyme', 'Je ne peux pas y accéder directement, mais toi... tu en es capable. Je te donne 1 heure. Récupère ce fichier. Fais ce qui doit être fait.', 13000);
    chatFrame.contentWindow.sendMessage('Anonyme', 'Discrétion et rapidité sont primordiales. Si tu réussis, il pourrait y avoir une belle récompense. Si tu échoues... oublie ce message.', 20000);
    chatFrame.contentWindow.sendMessage('Anonyme', '203.45.67.89', 21000);
    setTimeout(document.getElementById("timer-frame").contentWindow.startTimer, 21000);

    // Lorsque le joueur déclenche le rickroll.
    browserFrameContent.contentWindow.document.getElementById('rickroll-HAHA').addEventListener('click', () => {
        chatFrame.contentWindow.sendMessage('Anonyme', 'Je te croyais plus perspicace.. ', 2000);
    })
}

window.addEventListener('load', startGame);