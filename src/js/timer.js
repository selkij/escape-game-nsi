let timerInterval;
// Start the timer
function startTimer() {
    let hours = 1;
    let minutes = 0;
    let seconds = 0;

    if (timerInterval) return; // Prevent multiple timers from starting
    timerInterval = setInterval(function() {
        if(seconds === 0) {
            if(minutes === 0) {
                if(hours === 0) {
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
    }, 1);
    alert('NEUIIL');
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

 
window.onload(startTimer())