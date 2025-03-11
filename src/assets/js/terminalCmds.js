let unzipped = false;

/**
 *  Récupère la date actuelle et la formate d'une façon présentable et complète.
 *  @returns temps formaté
 */
function getFormattedTime() {
    const now = new Date();

    // Obtenir la date et l'heure au format souhaité.
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    // Obtenir le fuseau horaire en abrégé.
    const timeZone = Intl.DateTimeFormat("fr-FR", {timeZoneName: "short"})
        .format(now)
        .split(" ")[1];

    return `${year}-${month}-${day} ${hours}:${minutes} ${timeZone}`;
}

/**
 *  Supprime toutes les commandes précédentes dans la console.
 */
function clsCmd() {
    document.getElementById("command-history").innerHTML = "";
}

/**
 *  Affiche le contenu d'un fichier.
 *  @param {string} file fichier à lire.
 */
function catCmd(file) {
    switch (file) {
        case "wallet_access.txt":
            if(unzipped) {
                // TODO
                addCommandHistory("L2r1Yh2Vp3FhLQJZy7TGnM3B2XAoTnD7x5uGvFj6K5Zr9Z9Y9X9Z");
            } else {
                addCommandHistory("ERREUR: Fichier non trouvé.");
            }
            break;
        case "important.txt":
            addCommandHistory(
                "Informations très importantes en conformité avec l'importance qui est apporté à l'importance de ce fichier"
            );
            break;
        case "commonwords.txt":
            addCommandHistory(
                "admin<br>backup<br>config<br>database<br>debug<br>hidden<br>images<br>" +
                "includes<br>index.html<br>index.php<br>login<br>logs<br>private<br>robots.txt<br>secret<br>" +
                "server-status<br>uploads<br>user<br>wp-admin<br>wp-content<br>wp-includes"
            );
            break;
        default:
            addCommandHistory("ERREUR: Fichier non trouvé.");
    }
}

/**
 *  Pour chaque dossier, afficher leurs contenus (limiter le nombre de dossiers
 *    pour éviter un code à rallonge, ce n'est pas la priorité de faire quelque chose de fonctionnel ici).
 *    TODO
 */
function dirCmd() {
    switch (window.currentDirectory) {
        case "C:/Users/linfan":
            addCommandHistory("chat.jpg");
            addCommandHistory("important.txt");
            addCommandHistory("commonwords.txt");
            break;
        case "~/":
            addCommandHistory("chien.jpg");
            addCommandHistory("RedBat-Enterprise.iso");
            addCommandHistory("plansMajoranna1.pdf");
            break;
        case "/mnt/sde1":
            if (unzipped) {
                addCommandHistory("wallet_access.txt");
            } else {
                addCommandHistory("wallet_access.zip");
            }

            addCommandHistory("chien.png");
            break;
        case "/mnt/sdf3":
            addCommandHistory("minecraft2.AppImage");
            addCommandHistory("bimbows-5-19H3.iso");
            addCommandHistory("plans_zone51.obj");
            break;
    }
}

/**
 *  Permet de naviguer entre les dossiers.
 *  TODO
 */
function cdCmd(directory, knownDirectories) {
    if (knownDirectories.includes(window.currentDirectory)) {
        if (directory === "~/") {
            if (window.commandPrefixText !== "admin@203.45.67.89: ") {
                addCommandHistory("ERREUR: Veuillez spécifier un dossier valide.");
            } else {
                window.currentDirectory = directory;
            }
        } else {
            window.currentDirectory = directory;
        }
    } else {
        addCommandHistory("ERREUR: Veuillez spécifier un dossier valide.");
    }
}

/**
 *  Liste les ports ouverts d'une machine.
 *  @param {string} address
 */
function nmapCmd(address) {
    if (address === "203.45.67.89") {
        addCommandHistory(
            `Démarrage de Nmap 7.93 ( https://nmap.org ) à ${getFormattedTime()}<br>`
        );
        setTimeout(
            () =>
                addCommandHistory(
                    "Rapport d'analyse Nmap pour 203.45.67.89<br>" +
                    "L'hôte est opérationnel (latence de 0.0049s).<br>" +
                    "PORT &nbsp&nbsp&nbsp ETAT SERVICE<br>" +
                    "80/tcp &nbsp <span class='green'>ouvert</span> http<br>" +
                    "8080/tcp <span class='green'>ouvert</span> http-proxy<br>" +
                    "<br>" +
                    "Nmap terminé : 1 adresse IP (1 hôte opérationnel) analysée en 2.23 secondes "
                ),
            2230
        );
    } else {
        addCommandHistory(
            `Démarrage de Nmap 7.93 ( https://nmap.org ) à ${getFormattedTime()}<br>`
        );
        setTimeout(
            () =>
                addCommandHistory(
                    "Remarque : l'hôte semble en panne. S'il est réellement en service, mais bloque nos sondes ping, essayez -Pn<br>" +
                    "Nmap terminé : 1 adresse IP (1 hôte opérationnel) analysée en 3.16 secondes"
                ),
            3160
        );
    }
}

/**
 *  Permet de trouver les fichiers présent à une addresse avec une liste de mots.
 *  @param {string[]} args Arguments de la commande (ex: '-u').
 *  @param {string} type Type d'utilisation de gobuster.
 *  @param {string} address Adresse à vérifier.
 *  @param {string} wordlist Liste de noms de fichiers à vérifier.
 */
function gobusterCmd(type, args, address, wordlist) {
    if (type !== "dir") {
        addCommandHistory("Je n'ai pas besoin de faire cela.");
    } else if (!args.includes("-w")) {
        addCommandHistory("Je dois spécifier une liste de mots clés.");
    } else if (!args.includes("-u")) {
        addCommandHistory("Je dois spécifier une adresse cible.");
    } else {
        addCommandHistory(
            "===============================================================<br>" +
            "Gobuster v3.5<br>" +
            "par OJ Reeves (@TheColonial) et Christian Mehlmauer (@firefart)<br>" +
            "===============================================================<br>"
        );

        addCommandHistory(
            "[+] Url: " +
            address +
            "<br>" +
            "[+] Méthode: GET<br>" +
            "[+] Threads: 10<br>" +
            "[+] Wordlist: " +
            wordlist +
            "<br>" +
            "[+] Codes status négatifs: 404<br>" +
            "[+] Agent utilisateur: gobuster/3.5<br>" +
            "[+] Timeout: 5s<br>" +
            "===============================================================<br>" +
            `${getFormattedTime()} Démarrage du mode d'énumération de répertoires<br>` +
            "===============================================================<br>"
        );
        if (wordlist !== "commonwords.txt") {
            addCommandHistory(
                `ERREUR: erreur lors de l'analyse des arguments: le fichier de liste de mots "${wordlist}" ` +
                `n'existe pas: stat ${wordlist}: aucun fichier ou répertoire de ce type`
            );
        } else if (address !== "http://203.45.67.89:80") {
            setTimeout(
                () =>
                    addCommandHistory(
                        `ERREUR: erreur lors de l'exécution de gobuster: impossible de se connecter à ${address}: ` +
                        `GET \"${address}\" : délai de contexte dépassé (Client.Timeout dépassé lors de l'attente des en-têtes)`
                    ),
                5000
            );
        } else {
            setTimeout(
                () =>
                    addCommandHistory(
                        "/favicon.ico&nbsp<span class='green'>(Status: 200)</span> [Size: 29100]"
                    ),
                1000
            );
            setTimeout(
                () =>
                    addCommandHistory(
                        "/index.html&nbsp<span class='green'>(Status: 200)</span> [Size: 784]"
                    ),
                1200
            );
            setTimeout(
                () =>
                    addCommandHistory(
                        "/css&nbsp<span class='lightblue'>(Status: 301)</span> [Size: 170] <span class='blue'>[--> /src/browserpages/css/]</span>"
                    ),
                1350
            );
            setTimeout(
                () =>
                    addCommandHistory(
                        "/secret.txt&nbsp<span class='green'>(Status: 200)</span> [Size: 32]"
                    ),
                2000
            );
            setTimeout(
                () =>
                    addCommandHistory(
                        "/tools&nbsp<span class='red'>(Status: 403)</span> [Size: 1514]"
                    ),
                3500
            );
            setTimeout(
                () =>
                    addCommandHistory(
                        "Progress: 30745 / 31600 (97.33%)<br>" +
                        "===============================================================<br>" +
                        `${getFormattedTime()} Finished<br>` +
                        "===============================================================<br>"
                    ),
                3600
            );
        }
    }
}

/**
 * Permet d'établir une connexion à distance avec une machine.
 * @param args Arguments de la commande (ex: '-f').
 * @param password Mot de passe permettant de s'authentifier.
 * @param address Adresse cible.
 * @param user Compte utilisateur à utiliser lors de la connexion.
 */
function sshCmd(address, user, password, args) {
    if (args[1] !== "-p") {
        addCommandHistory("ERREUR: Un mot de passe est requis.");
    } else if (args[0] !== "-u") {
        addCommandHistory("ERREUR: Un nom d'utilisateur est requis.");
    } else if (address !== "203.45.67.89") {
        setTimeout(
            () => addCommandHistory(`ERREUR: Adresse inaccessible ${address}.`),
            2000
        );
    } else if (user !== "admin") {
        setTimeout(
            () => addCommandHistory(`ERREUR: Utilisateur introuvable ${user}.`),
            1500
        );
    } else if (password !== "X9L7G5TQ2ZKPJ8M4YVWC1ND6RS0FHBAE") {
        setTimeout(() => addCommandHistory("ERREUR: Mot de passe invalide."), 2000);
    } else {
        setTimeout(() => {
            clsCmd();
            addCommandHistory("Connexion réussie");
            window.currentDirectory = "~/";
            window.commandPrefixText = "admin@203.45.67.89: ";
        }, 2500);
    }
}

/**
 * Liste les différents composants présent dans la machine.
 * @param {string} arg Argument de la commande (ex: '-class').
 * @param {string} type Type de composants à énumérer.
 */
function lshwCmd(arg, type) {
    if (window.commandPrefixText !== "admin@203.45.67.89: ") {
        addCommandHistory("Je n'ai pas besoin de faire celà.");
    } else if (arg !== "-class") {
        addCommandHistory(
            "ERREUR: Une erreur d'interprétation des arguments est survenue."
        );
    } else if (type !== "disk") {
        addCommandHistory("Je n'ai pas besoin de faire celà.");
    } else {
        setTimeout(
            () =>
                addCommandHistory(
                    "H/W path&nbsp;&nbsp; Device &nbsp;&nbsp; Class Description<br>" +
                    "------------------------------------------------<br>" +
                    "/0/0/0 &nbsp;/dev/sda &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disk 500GB Samsung SSD<br>" +
                    "/0/1/0 &nbsp;/dev/0x73646633 disk 500GB WD5000AAKX<br>" +
                    "/0/2/0 &nbsp;/dev/0x73646531 disk 1TB Seagate Barracuda<br>"
                ),
            1000
        );
    }
}

/**
 * Permet de rendre accessible un disque à un chemin précis.
 * @param {string} disk Disque à rendre accessible
 * @param {string} path Chemin final du disque.
 */
function mountCmd(disk, path) {
    if (window.commandPrefixText !== "admin@203.45.67.89: ") {
        addCommandHistory("Je n'ai pas besoin de faire celà.");
    } else if (path === undefined) {
        addCommandHistory("ERREUR: Chemin cible non spécifié.");
    } else {
        switch (disk) {
            case "/dev/sdf3":
                if (path === "/mnt/sdf3") {
                    setTimeout(
                        () => addCommandHistory(`Montage réussi de /dev/sdf3 à ${path}`),
                        1300
                    );
                    window.knownDirectories.push(path);
                } else {
                    addCommandHistory("Je n'ai pas besoin de le mettre là.");
                }

                break;
            case "/dev/sde1":
                if (path === "/mnt/sde1") {
                    setTimeout(
                        () => addCommandHistory(`Montage réussi de /dev/sde1 à ${path}`),
                        1300
                    );
                    window.knownDirectories.push(path);
                    console.log(window.knownDirectories);
                } else {
                    addCommandHistory("Je n'ai pas besoin de le mettre là.");
                }

                break;
            default:
                addCommandHistory("ERREUR: Disque inconnu");
                break;
        }
    }
}

/**
 * TODO
 * */
function unzipCmd(file, arg, password) {
    if (file !== "wallet_access.zip") {
        addCommandHistory("Je n'ai pas besoin de faire celà avec ce fichier.");
    } else {
        if (arg !== "-P") {
            addCommandHistory("ERREUR: Une erreur d'interprétation des arguments est survenue.")
        } else if (password === "test") {
            unzipped = true;
        } else {
            addCommandHistory("ERREUR: Mot de passe incorrecte.");
        }
    }
}
