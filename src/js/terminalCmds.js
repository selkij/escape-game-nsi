function dirCmd(currentDirectory) {
    switch(currentDirectory) {
        case 'C:\\Users\\linfan':
            addCommandHistory("Documents/");
            addCommandHistory("Téléchargements/");
            addCommandHistory("chat.jpg");
            addCommandHistory("important.txt");
            break;
    }
}

function cdCmd(directory, currentDirectory, knownDirectories) {
    if(knownDirectories.includes(currentDirectory)) {
        return directory;
    } else {
        addCommandHistory('ERREUR: Veuillez spécifier un dossier valide.')
    }
}