function randomiseWindowPositions() {
    const divs = document.querySelectorAll('.frame-container');
        divs.forEach(div => {

        // Get random position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        // Apply the random position to the div
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
    });
}

window.onload=randomiseWindowPositions;
