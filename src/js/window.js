let frames = document.getElementsByClassName("frame-container");

Array.from(frames).forEach(frame => {
    dragElement(frame);
});

function hideWindowFrame(frame) {
    // This is used for when the minimize button is clicked
    frame.hidden = !frame.hidden;
}

function dragElement(element) {
    let x1 = 0, y1 = 0, x2 = 0, y2 = 0;
    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();

        // Get cursor position at start
        x2 = e.clientX;
        y2 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();

        // Calculate new cursor position
        x1 = x2 - e.clientX;
        y1 = y2 - e.clientY;
        x2 = e.clientX;
        y2 = e.clientY;

        // Set new position of element
        element.style.top = (element.offsetTop - y1) + "px";
        element.style.left = (element.offsetLeft - x1) + "px";
    }

    function closeDragElement() {
        // Stop moving when mouse is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}