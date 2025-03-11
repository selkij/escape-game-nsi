let commandInput = document.getElementById("command-input");
let commandHistory = document.getElementById("command-history");
let commandPrefix = document.getElementById("command-prefix");

window.currentDirectory = "C:/Users/linfan";
window.knownDirectories = ["C:/Users/linfan", "~/"];
window.commandPrefixText = `${currentDirectory}> `;

/**
 * Affiche du texte dans le terminal, plus précisément, elle ajoute un élément dans l'historique.
 */
function addCommandHistory(msg) {
    commandHistory.insertAdjacentHTML("beforeend", `<p>${msg}</p>`);
    commandHistory.scrollTop = commandHistory.scrollHeight;
}

/**
 * Permet d'exécuter toute commande connue.
 */
function executeCommand(command, args) {
    addCommandHistory(`${window.commandPrefixText} ${commandInput.value}`);
    switch (command) {
        case "dir":
            dirCmd();
            break;
        case "cd":
            if (args.length >= 1) {
                cdCmd(args[0], window.knownDirectories);
            }
            break;
        case "cat":
            catCmd(args[0]);
            break;
        case "cls":
            clsCmd();
            break;
        case "nmap":
            nmapCmd(args[0]);
            break;
        case "gobuster":
            if (args.length < 5) {
                addCommandHistory(
                    "ERREUR: Veuillez spécifier les informations nécessaire au fonctionnement de gobuster."
                );
                break;
            }
            gobusterCmd(args[0], [args[1], args[3]], args[2], args[4]);
            break;
        case "ssh":
            if (args.length < 5) {
                addCommandHistory(
                    "ERREUR: Veuillez spécifier les informations nécessaire au fonctionnement de ssh."
                );
                break;
            }
            sshCmd(args[0], args[2], args[4], [args[1], args[3]]);
            break;
        case "lshw":
            lshwCmd(args[0], args[1]);
            break;
        case "mount":
            mountCmd(args[0], args[1]);
            break;
        case "unzip":
            unzipCmd(args[0], args[1], args[2]);
            break;
        default:
            addCommandHistory("ERREUR: Commande non reconnue. " + command);
            break;
    }
}

// Gestion des entrées de commande.
commandInput.addEventListener("keydown", function (e) {
    let args;

    if (e.key === "Enter") {
        if (commandInput.value.length > 0) {
            let command = commandInput.value.split(" ")[0];

            if (commandInput.value.split(" ").length >= 2) {
                args = commandInput.value.split(" ");
                args.shift(); // Enlève le nom de la commande
                console.log("command: " + command + " args: " + args);
            } else {
                args = [];
                console.log("command: " + command + " args: empty");
            }

            executeCommand(command, args);
            commandInput.value = "";
            commandPrefix.innerText = window.commandPrefixText;
        } else {
            commandPrefix.innerText = window.commandPrefixText;
            addCommandHistory(window.commandPrefixText);
        }
    }
});
