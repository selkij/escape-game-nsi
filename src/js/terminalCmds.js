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

function nmapCmd(address) {
    if (address === "203.45.67.89") {
        addCommandHistory("Nmap scan report for google.com (203.45.67.89)\n" +
            "Host is up (0.0049s latency).\n" +
            "Other addresses for google.com (not scanned): 2a00:1450:4007:813::200e\n" +
            "rDNS record for 203.45.67.89: par21s19-in-f14.1e100.net\n" +
            "Not shown: 997 filtered tcp ports (no-response), 1 filtered tcp ports (net-unreach)\n" +
            "PORT    STATE SERVICE\n" +
            "80/tcp  open  http\n" +
            "443/tcp open  https\n" +
            "\n" +
            "Nmap done: 1 IP address (1 host up) scanned in 4.97 seconds");
    } else {
        addCommandHistory("Starting Nmap 7.93 ( https://nmap.org ) at 2025-02-21 19:08 CET\n" +
            "Note: Host seems down. If it is really up, but blocking our ping probes, try -Pn\n" +
            "Nmap done: 1 IP address (0 hosts up) scanned in 3.16 seconds");
    }
}