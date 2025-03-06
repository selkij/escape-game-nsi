let frames = document.getElementsByClassName("frame-header");

// Ajoute la possibilité de glisser chaque élément ayant la classe frame-container.
Array.from(frames).forEach((frame) => {
  dragElement(frame);
});

/**
 * Cache la fenêtre en inversant l'état hidden de l'iframe
 * @param frame iframe à cacher
 */
function hideWindowFrame(frame) {
  // This is used for when the minimize button is clicked
  frame.hidden = !frame.hidden;
}

/**
 * Permet de glisser un élément sélectionné au préalable à la souris, à travers la page.
 * @param element élément à glisser
 */
function dragElement(element) {
  element = element.parentElement;
  let x1 = 0,
    y1 = 0,
    x2 = 0,
    y2 = 0;
  element.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();

    // Récupère la position du curseur au début.
    x2 = e.clientX;
    y2 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();

    // Calcule la nouvelle position du curseur.
    x1 = x2 - e.clientX;
    y1 = y2 - e.clientY;
    x2 = e.clientX;
    y2 = e.clientY;

    // Change la position de l'élément.
    element.style.top = element.offsetTop - y1 + "px";
    element.style.left = element.offsetLeft - x1 + "px";
  }

  // Indique à l'élément de ne plus être glissé lorsque le clic est relâché.
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
