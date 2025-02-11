let commandInput = document.getElementById('command-input');
let commandHistory = document.getElementById('command-history');
let commandPrefix = document.getElementById('command-prefix');

let currentDirectory = 'C:/Users/linfan'
let knownDirectories = [ 'C:/Users/linfan', 'C:/Users/linfan/Documents/', 'C:/Users/linfan/Téléchargements/' ]

// This outputs text to the terminal
function addCommandHistory(msg) {
    commandHistory.insertAdjacentHTML('beforeend', `<p>${msg}</p>`);
    commandHistory.scrollTop = commandHistory.scrollHeight;
}

// This function will execute any known commands
function executeCommand(command, args) {
    addCommandHistory(`${currentDirectory}> ${commandInput.value}`);
    switch(command) {
        case 'dir':
            dirCmd(currentDirectory);
            break;
        case 'cd':
            if(args.length > 1) {
                cdCmd(args[0], currentDirectory, knownDirectories);
            }
            break;
        default:
            addCommandHistory('ERREUR: Commande non reconnue. '+ command);
            break;
    }
}

// Command input handling
commandInput.addEventListener('keydown', function(e) {
    let args;
    if (e.key === 'Enter') {
        if(commandInput.value.length > 0) {
            let command = commandInput.value.split(' ')[0];
            if (commandInput.value.split(' ').length >= 2) {
                args = commandInput.value.split(' ');
                args.shift(); // remove the command from the args array
                console.log("command: " + command + " args: " + args)
            } else {
                args = [];
                console.log("command: " + command + " args: empty")
            }

            executeCommand(command, args)
            commandInput.value = '';
            commandPrefix.innerText = `${currentDirectory}> `;
        }
    }
});