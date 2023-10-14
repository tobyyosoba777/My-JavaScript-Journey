// function displayTime() {
//     var date = new Date();
//     var hours = date.getHours();
//     var minute = date.getMinutes();
//     var seconds = date.getSeconds();
//     var session = document.getElementById('session');

//     if(hours >= 12) {
//         session.innerHTML = 'PM';
//     }
//     else {
//         session.innerHTML = 'AM'
//     }

//     if(hours < 10) {
//         document.getElementById('hours').innerHTML = "0" + hours;
//     }

    
//     if(hours > 12) {
//         hours = hours - 12;
//     }


//     document.getElementById('hours').innerHTML = hours;
//     document.getElementById('minute').innerHTML = minute;
//     document.getElementById('seconds').innerHTML = seconds;

// }
// setInterval(displayTime, 10);

// function displayTimee() {
//     var date = new Date();
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();
//     var session = document.getElementById('session');

//     if(hours >= 12) {
//         session.innerHTML = 'PM';
//     }
//     else {
//         session.innerHTML = 'AM';
//     }

//     if(hours < 10) {
//         document.getElementById('hours').innerHTML = '0' + hours;
//     }

//     if(hours > 12) {
//         hours = hours - 12;
//     }

//     document.getElementById('hours').innerHTML = hours;
//     document.getElementById('minute').innerHTML = minutes;
//     document.getElementById('seconds').innerHTML = seconds;
// }
// setInterval(displayTimee, 10);

function displayTimeee() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = document.getElementById('session');

    if(hours >= 12) {
        session.innerHTML = 'PM';
    }
    else {
        session.innerHTML = 'AM';
    }

    if(hours < 10) {
        document.getElementById('hours').innerHTML = "0" + hours;
    }
    if(hours > 12) {
        hours = hours - 12;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}
setInterval(displayTimeee, 10);