let timerInterval;

/**
 * Formate time pour respecter la syntaxe du chronomètre.
 * @param time Temps à formater.
 * @returns {string|*} Temps formaté, si time est inférieur à dix alors, on retourne "0"+time, sinon on retourne juste time.
 */
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

/**
 * Commence le chronomètre d'une heure.
 */
function startTimer() {
    let hours = 0;
    let minutes = 0;
    let seconds = 1;

    timerInterval = setInterval(function () {
        if (seconds === 1) {
            if (minutes === 0) {
                if (hours === 0) {
                    // Lorsque le compte à rebours expire.
                    clearInterval(timerInterval);
                    var frames = window.parent.document.getElementsByClassName('frame-container');
                    Array.from(frames).forEach((frame) => {
                        frame.style.display = 'none';
                    });
                    window.parent.document.getElementById('gameover-frame-container').style.display = 'flex';

                } else {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        document.getElementById('timer').textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    }, 1000);
}