function displayTime(){
    var date = new Date();
    var hrs = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = document.getElementById('session');

    if (hrs >= 12) {
        session.innerHTML = 'PM';
    }
    else {
        session.innerHTML = 'AM';
    }

    if(hrs > 12) {
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

setInterval(displayTime, 10);