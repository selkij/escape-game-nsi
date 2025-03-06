document.addEventListener("DOMContentLoaded", function () {
  let chatFrame = document.getElementById("chat-frame");
  let browserFrame = document.getElementById("browser-frame");
  let terminalFrame = document.getElementById("terminal-frame");
  let browserFrameContent =
    browserFrame.contentWindow.document.getElementById("browser-frame");

  // Game states
  let sshConnected = false;

  /**
   * Commence l'escape game
   */
  function startGame() {
    chatFrame.contentWindow.sendMessage("Vous", "Qui êtes-vous?", 2000);
    chatFrame.contentWindow.sendMessage(
      "Anonyme",
      "Tu ne me connais pas, mais moi, je te connais suffisamment pour savoir que tu es capable de relever un défi d'une importance capitale.",
      5000
    );
    chatFrame.contentWindow.sendMessage("Vous", "Quoi?", 7000);
    chatFrame.contentWindow.sendMessage(
      "Anonyme",
      'Voici ta mission : Il y a une machine. Rien de particulier à l’œil nu, mais en son sein se trouve un fichier nommé "wallet_access.txt". Ce fichier est la clé d\'un porte-monnaie contenant 45 bitcoins.',
      10000
    );
    chatFrame.contentWindow.sendMessage(
      "Anonyme",
      "Je ne peux pas y accéder directement, mais toi... tu en es capable. Je te donne 1 heure. Récupère ce fichier. Fais ce qui doit être fait.",
      13000
    );
    chatFrame.contentWindow.sendMessage(
      "Anonyme",
      "Discrétion et rapidité sont primordiales. Si tu réussis, il pourrait y avoir une belle récompense. Si tu échoues... oublie ce message.",
      20000
    );
    chatFrame.contentWindow.sendMessage("Anonyme", "203.45.67.89", 21000);
    setTimeout(
      document.getElementById("timer-frame").contentWindow.startTimer,
      21000
    );

    // Lorsque le joueur déclenche le rickroll.
    setTimeout(() => {
      browserFrameContent.contentWindow.document
        .getElementById("rickroll-HAHA")
        .addEventListener("click", () => {
          chatFrame.contentWindow.sendMessage(
            "Anonyme",
            "Je te croyais plus perspicace.. ",
            2000
          );
        });
    }, 10000);
  }

  setTimeout(() => {
    setInterval(() => {
      if (
        terminalFrame.contentWindow.document.getElementById("command-prefix")
          .innerHTML === "admin@203.45.67.89: "
      ) {
        if (sshConnected === false) {
          console.log("myVar is now 'ready'!");
          sshConnected = true;
        }
      }
    }, 500);
  }, 5000);

  window.addEventListener("load", startGame);
});
