let commandInput = document.getElementById('command-input');
let commandHistory = document.getElementById('command-history');
let commandPrefix = document.getElementById('command-prefix');

let currentDirectory = 'C:/Users/linfan';
let knownDirectories = ['C:/Users/linfan'];

/**
 * Affiche du texte dans le terminal, plus précisément, elle ajoute un élément dans l'historique.
 */
function addCommandHistory(msg) {
    commandHistory.insertAdjacentHTML('beforeend', `<p>${msg}</p>`);
    commandHistory.scrollTop = commandHistory.scrollHeight;
}

/**
 * Permet d'exécuter toute commande connue.
 */
function executeCommand(command, args) {
    addCommandHistory(`${currentDirectory}> ${commandInput.value}`);
    switch (command) {
        case 'dir':
            dirCmd(currentDirectory);
            break;
        case 'cd':
            if (args.length > 1) {
                cdCmd(args[0], currentDirectory, knownDirectories);
            }
            break;
        case 'cat':
            catCmd(args[0]);
            break;
        case 'cls':
            clsCmd();
            break;
        case 'nmap':
            nmapCmd(args[0]);
            break;
        case 'gobuster':
            if(args.length < 5) {
                addCommandHistory('ERREUR: Veuillez spécifier les informations nécessaire au fonctionnement de gobuster.');
                break;
            }
            gobusterCmd(args[0], [args[1], args[3]], args[2], args[4]);
            break;
        case 'help':
        default:
            addCommandHistory('ERREUR: Commande non reconnue. ' + command);
            break;
    }
}

// Gestion des entrées de commande.
commandInput.addEventListener('keydown', function (e) {
    let args;

    if (e.key === 'Enter') {
        if (commandInput.value.length > 0) {
            let command = commandInput.value.split(' ')[0];

            if (commandInput.value.split(' ').length >= 2) {
                args = commandInput.value.split(' ');
                args.shift(); // Enlève le nom de la commande
                console.log("command: " + command + " args: " + args)
            } else {
                args = [];
                console.log("command: " + command + " args: empty")
            }

            executeCommand(command, args)
            commandInput.value = '';
            commandPrefix.innerText = `${currentDirectory}> `;
        } else {
            addCommandHistory(`${currentDirectory}> `);
        }
    }
});