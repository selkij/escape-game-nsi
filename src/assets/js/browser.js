// Change la page de l'iframe en fonction de l'entrée.
function recherche() {
    let link = document.getElementById("link-input").value;
    switch (link) {
        case "http://203.45.67.89:80":
            document.getElementById("browser-frame").src =
                "browserpages/machine.html";
            break;
        case "http://203.45.67.89:80/secret.txt":
            document.getElementById("browser-frame").src = "browserpages/secret.txt";
            break;
        case "http://203.45.67.89:8080":
            break;
        default:
            document.getElementById("browser-frame").src = link;
            break;
    }
}

document.getElementById("link-input").addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        recherche();
    }
});