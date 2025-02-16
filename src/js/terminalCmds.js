/**
 * Pour chaque dossier, afficher leurs contenus (limiter le nombre de dossiers
 *    pour éviter un code à rallonge, ce n'est pas la priorité de faire quelque chose de fonctionnel ici).
 */
function dirCmd(currentDirectory) {
    switch (currentDirectory) {
        case 'C:/Users/linfan':
            addCommandHistory("chat.jpg");
            addCommandHistory("important.txt");
            break;
    }
}

/**
 *  Permet de naviguer entre les dossiers.
 */
function cdCmd(directory, currentDirectory, knownDirectories) {
    if (knownDirectories.includes(currentDirectory)) {
        return directory;
    } else {
        addCommandHistory('ERREUR: Veuillez spécifier un dossier valide.')
    }
}