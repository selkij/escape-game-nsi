let commandInput = document.getElementById('command-input');
let commandHistory = document.getElementById('command-history');

function addCommandHistory(msg) {
    commandHistory.append(document.createElement('p').textContent = msg);
}

function executeCommand(command, args) {
    alert('Executing command: ' + command + ' with args ' + args);
    addCommandHistory(commandInput.value);
    switch(command) {
        case 'dir':
            addCommandHistory('bouu');
            addCommandHistory('haha');
            addCommandHistory('neuil');
            break;
        default:
            addCommandHistory('ERREUR: Commande non reconnue. '+ command);
            break;
    }
}

commandInput.addEventListener('keydown', function(e) {
    let args;
    if (e.key === 'Enter') {
        let command = commandInput.value.split(' ')[0];
        if (commandInput.value.split(' ').length >= 2) {
            args = commandInput.value.split(' ');
            args.shift(); // remove the command from the args array
            console.log("command: " + command + " args: " + args)
        } else {
            args = [];
            console.log("command: " + command + " args: empty")
        }

        if (commandInput.value > 0) {
            executeCommand(command, args)
            commandInput.value = '';
        }
    }
});

setInterval(() => {
    if(document.activeElement !== commandInput) {
        commandInput.focus();
    }
})

