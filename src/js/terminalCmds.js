/**
 * Récupère la date actuelle et la formate d'une façon présentable et complète.
 * @returns temps formaté
 */
function getFormattedTime() {
    const now = new Date();
    
    // Obtenir la date et l'heure au format souhaité
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Mois commence à 0
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    // Obtenir le fuseau horaire en abrégé
    const timeZone = Intl.DateTimeFormat('fr-FR', { timeZoneName: 'short' }).format(now).split(' ')[1];

    return `${year}-${month}-${day} ${hours}:${minutes} ${timeZone}`;
}

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

/**
 * TODO
 * @param {string} address
 */
function nmapCmd(address) {
    if (address === "203.45.67.89") {
        addCommandHistory(`Démarrage de Nmap 7.93 ( https://nmap.org ) à ${getFormattedTime()}<br>` +
            "Rapport d'analyse Nmap pour 203.45.67.89<br>" +
            "L'hôte est opérationnel (latence de 0.0049s).<br>" +
            "PORT &nbsp&nbsp&nbsp ETAT SERVICE<br>" +
            "80/tcp &nbsp ouvert http<br>" +
            "8080/tcp ouvert http-proxy<br>" +
            "<br>" +
            "Nmap terminé : 1 adresse IP (1 hôte opérationnel) analysée en 4.97 secondes ");
    } else {
        addCommandHistory(`Démarrage de Nmap 7.93 ( https://nmap.org ) à ${getFormattedTime()}<br>` +
            "Remarque : l'hôte semble en panne. S'il est réellement en service, mais bloque nos sondes ping, essayez -Pn<br>" +
            "Nmap terminé : 1 adresse IP (1 hôte opérationnel) analysée en 3.16 secondes");
    }
}

/**
 * TODO
 * @param {*} args 
 */
function gobusterCmd(args) {
    args.array.forEach(element => {
        // TODO
        /* Example
            ===============================================================
            Gobuster v3.5
            by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
            ===============================================================
            [+] Url:                     http://127.0.0.1:5500/
            [+] Method:                  GET
            [+] Threads:                 50
            [+] Wordlist:                dirb/wordlists/common.txt
            [+] Negative Status codes:   404
            [+] User Agent:              gobuster/3.5
            [+] Extensions:              txt,php,html
            [+] Follow Redirect:         true
            [+] Timeout:                 10s
            ===============================================================
            2025/02/26 09:49:10 Starting gobuster in directory enumeration mode
            ===============================================================
            /.cache               (Status: 200) [Size: 6076]
            /.git/HEAD            (Status: 200) [Size: 21]
            /bin                  (Status: 403) [Size: 1510]
            /favicon.ico          (Status: 200) [Size: 29100]
            /license              (Status: 200) [Size: 1083]
            /LICENSE              (Status: 200) [Size: 1083]
            /policies             (Status: 403) [Size: 1520]
            /resources            (Status: 403) [Size: 1522]
            /Resources            (Status: 403) [Size: 1522]
            /secret.txt           (Status: 200) [Size: 0]
            /src                  (Status: 200) [Size: 3364]
            /tools                (Status: 403) [Size: 1514]
            Progress: 18456 / 18460 (99.98%)
            ===============================================================
            2025/02/26 09:49:25 Finished
            ===============================================================
        */
    });
}