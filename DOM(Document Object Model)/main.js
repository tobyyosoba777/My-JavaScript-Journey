let main = document.querySelector(".main");
let timeButton = document.getElementById("button")
let result = document.querySelector(".result")
let dateResult = document.getElementById("dateResult")
let dateButton = document.getElementById("button1")

main.innerText = `Hi There
World\n\n`

const updateTime = () => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    result = document.querySelector(".result");
    result.innerText = `${hours} : ${minutes} : ${seconds}`;
    console.log("time Updated")
}

timeButton.onclick = () => {
    setInterval(updateTime, 1000);
}

const displayDay = () => {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    console.log("clicked")
    dateResult.innerText = `${day} / ${month} / ${year}`;
}
dateButton.addEventListener("click", displayDay);