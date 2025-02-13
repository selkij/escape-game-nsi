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
    let hours = 1;
    let minutes = 0;
    let seconds = 0;

    timerInterval = setInterval(function () {
        if (seconds === 0) {
            if (minutes === 0) {
                if (hours === 0) {
                    clearInterval(timerInterval);
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

window.addEventListener('load', startTimer());