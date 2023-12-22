let main = document.querySelector(".main");
let dateButton = document.getElementById("button")
let result = document.querySelector(".result")

main.innerText = `Hi There
World\n\n`

const updateTime = () => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    const result = document.querySelector(".result");
    result.inneText = `${hours} : ${minutes} : ${seconds}`;
    console.log("time Updated")
}

dateButton.addEventListener("click", updateTime);
setInterval(updateTime, 1000)