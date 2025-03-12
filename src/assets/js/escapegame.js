document.addEventListener("DOMContentLoaded", function () {
    let chatFrame = document.getElementById("chat-frame");
    let browserFrame = document.getElementById("browser-frame");
    let terminalFrame = document.getElementById("terminal-frame");
    let browserFrameContent =
        browserFrame.contentWindow.document.getElementById("browser-frame");

    // Game states
    let nmap = false;
    let gobuster = false;
    let sshConnected = false;
    let lshw = false;
    let mount = false;

    let finished = false;

    /**@
     * Commence l'escape game
     */
    function startGame() {
        chatFrame.contentWindow.sendMessage("Vous", "Qui êtes-vous?", 2000);
        chatFrame.contentWindow.sendMessage(
            "Anonyme",
            "Tu ne me connais pas, mais moi, je te connais suffisamment pour savoir que tu es capable de relever un défi d'une importance capitale.",
            5000
        );
        chatFrame.contentWindow.sendMessage("Vous", "Quoi?", 7000);
        chatFrame.contentWindow.sendMessage(
            "Anonyme",
            'Voici ta mission : Il y a une machine. Rien de particulier à l’œil nu, mais en son sein se trouve un fichier nommé "wallet_access.txt". Ce fichier est la clé d\'un porte-monnaie contenant 45 bitcoins.',
            10000
        );
        chatFrame.contentWindow.sendMessage(
            "Anonyme",
            "Je ne peux pas y accéder directement, mais toi... tu en es capable. Je te donne 1 heure. Récupère ce fichier. Fais ce qui doit être fait.",
            13000
        );
        chatFrame.contentWindow.sendMessage(
            "Anonyme",
            "Discrétion et rapidité sont primordiales. Si tu réussis, il pourrait y avoir une belle récompense. Si tu échoues... oublie ce message.",
            20000
        );
        chatFrame.contentWindow.sendMessage("Anonyme", "203.45.67.89", 21000);
        chatFrame.contentWindow.sendMessage("Vous", "Euuh attends mais-", 23000);
        chatFrame.contentWindow.sendMessage("Anonyme", "Tu devrais pouvoir trouver un point d'entrée avec la commande nmap pour scanner les ports ouverts.", 25000);
        setTimeout(
            document.getElementById("timer-frame").contentWindow.startTimer,
            21000
        );

        // Lorsque le joueur déclenche le rickroll.
        setTimeout(() => {
            browserFrameContent.contentWindow.document
                .getElementById("rickroll-HAHA")
                .addEventListener("click", () => {
                    chatFrame.contentWindow.sendMessage(
                        "Anonyme",
                        "Je te croyais plus perspicace.. ",
                        2000
                    );
                });
        }, 10000);
    }

    setTimeout(() => {
        setInterval(() => {
            if (finished) {
                document.getElementById("gameover-frame-container").style.display = "flex";
            }


            let commandHistory = terminalFrame.contentWindow.document.getElementById("command-history");
            Array.from(commandHistory.querySelectorAll("p")).forEach((command) => {
                if (command.innerText.endsWith("nmap 203.45.67.89")) {
                    if (nmap === false) {
                        nmap = true;
                        chatFrame.contentWindow.sendMessage('Anonyme', 'Bien. On dirait qu\'il y a un site internet hébergé sur cette machine, tu devrais y accéder depuis le navigateur.', 2000);
                    }
                } else if (command.innerText.endsWith("gobuster dir -u http://203.45.67.89:80 -w commonwords.txt")) {
                    if(gobuster === false) {
                        gobuster = true;
                        chatFrame.contentWindow.sendMessage('Anonyme', 'Apparament, il y a un fichier caché dans le répertoire du site, peut-être tu pourras en tirer quelque chose, un mot de passe pour se connecter ou autre..', 5000);
                    }
                } else if (command.innerText.endsWith("lshw")) {
                    if(lshw === false) {
                        lshw = true;
                        chatFrame.contentWindow.sendMessage('Anonyme', 'Hmm, on dirait que certains chemins des disques sont encodé. Enfin bref, tu devras les rendre accessible grâce à la commande mount.', 2000);
                    }
                } else if (command.innerText.endsWith("mount /dev/sde1")) {
                    if(mount === false) {
                        mount = true;
                        chatFrame.contentWindow.sendMessage('Anonyme', '<web ch719;458;17;348;45;227;995;225;18>, envoies moi la clé de connexion au wallet dès que possible.', 2000);
                    }
                }
            });

            // Lorsque le joueur se connecte à la machine à distance.
            if (terminalFrame.contentWindow.window.commandPrefixText.startsWith("admin@203.45.67.89")) {
                if (sshConnected === false) {
                    chatFrame.contentWindow.sendMessage('Anonyme', 'Te voilà donc maintenant connecté à distance à la machine. Pas mal du tout.', 2000);
                    chatFrame.contentWindow.sendMessage('Anonyme', 'Tu devrais maintenant chercher dans les fichiers pour le trouver, il peut être sur un autre disque. Utilise la commande lshw pour en avoir le coeur net.', 4000);
                    sshConnected = true;
                }
            }

            // Condition de réussite.
            let pElements = chatFrame.contentWindow.document.getElementById("message-history").querySelectorAll('p');
            pElements.forEach(e => {
                if (e.textContent === '(Vous): L2r1Yh2Vp3FhLQJZy7TGnM3B2XAoTnD7x5uGvFj6K5Zr9Z9Y9X9Z') {
                    if (finished === false) {
                        setTimeout(() => finished = true, 2000);
                        document.getElementById('gameover-frame').contentWindow.document.getElementById("techinfo-crash").innerText = "TechInfo: Tu en as mis du temps, merci pour les BitCoins, adieu !"
                    }
                }
            });

        }, 500);
    }, 5000);

    window.addEventListener("load", startGame);
});
