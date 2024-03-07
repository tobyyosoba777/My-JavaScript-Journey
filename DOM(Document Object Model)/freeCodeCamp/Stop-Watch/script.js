const startStopBtn = document.querySelector('#startStopButton');
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0
let minutes = 0;
let hours = 0;

let lSeconds = 0
let lMinutes = 0
let lHours = 0

let timerInterval = null;
let timerStatus = "Stopped";

function stopWatch() {

    seconds++;

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1) {
            minutes = 0;
            hours++
        }
    }

    if(seconds < 10) {
        lSeconds = "0" + seconds.toString()
    } else {
        lSeconds = seconds;
    }

    if(minutes < 10) {
       lMinutes = "0" + minutes.toString(); 
    } else {
        lMinutes = minutes;
    }
    if (hours < 10) {
        lHours = "0" + hours.toString();
    }else {
        lHours = hours;
    }

    let displayTime = document.querySelector('#timer').innerText = 
    lHours + ":" + lMinutes + ":" + lSeconds
}

// window.setInterval(stopWatch, 1000)

startStopBtn.addEventListener("click", function() {
    if(timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopButton').innerHTML = 
        `<i class="fa-solid fa-pause" id="pause"> </i>`;
        timerStatus = "started";
    }
    else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopButton').innerHTML = 
        `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
})

resetBtn.addEventListener("click", () => {
    window.clearInterval(timerInterval)
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText = "00:00:00";
})