let main = document.querySelector(".main");
let timeButton = document.getElementById("button")
let result = document.querySelector(".result")
let dateResult = document.getElementById("dateResult")
let dateButton = document.getElementById("button1")
let returnDiv = document.getElementById("returnDiv")
let displayName = document.getElementById("displayName");
let displayAge = document.getElementById("displayAge");
let navbar = document.getElementById("header");
let h2der = document.querySelector(".h2").innerText = `My Little Space`;
let button = document.getElementById("buttons")
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.style.borderRadius = "10px";
    button.style.border = "#C0C 4px double";
    button.style.padding = "10px";
})



navbar.style.backgroundColor = "#C0C";
navbar.style.border = "#333 1px solid";
// document.body.style.backgroundColor = "#C0C0C0";



divContext = `Hi There
World\n\n`
main.innerText = divContext

let darkmode = document.getElementById("darkmode")
darkmode.addEventListener("click", () => {
    if(darkmode.classList.contains("ri-moon-fill")) {
        darkmode.classList.replace("ri-moon-fill", "ri-sun-fill");
        document.body.classList.add("dark")
    }
    else {
        darkmode.classList.replace("ri-sun-fill", "ri-moon-fill");
        document.body.classList.remove("dark")
    }
})

//Function to Display Time
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

returnDiv.onclick = () => {
    let divResult = document.getElementById("divContext");
    divResult.innerText = divContext

}

const details1 = {
    name: "Tobiloba Osoba",
    age: 19,
}

displayName.addEventListener("click", () => {
    const nameResult = document.getElementById("nameResult");
    let namee = `${details1.name}`;
    nameResult.innerText = namee;
})

displayAge.addEventListener("click", () => {
    const ageResult = document.getElementById("ageResult");
    let agee = `${details1.age}`;
    ageResult.innerText = agee;
})

let create = document.getElementById("create")
create.style.borderRadius = "10px"
create.style.margin = "12px 0"

create.addEventListener("click", () => {
    let list = document.querySelector(".list")
    createdElement = document.createElement("textarea")
    createdElement.rows = 10;
    createdElement.cols = 30;
    list.appendChild(createdElement);
})

const mainn = (function() {
    return function mainn() {
        
    }
})();

document.querySelector(".palindrome").style.backgroundColor = "#C065";
const palButton = document.querySelector(".checkPalindrome")



let palB = document.querySelector(".checkPalindrome");
palB.addEventListener("click", () => {
    const check = (palText) => {
        let len = palText.length;
        let start = palText.substring(0, Math.floor(len / 2));
        let end = palText.substring(len - Math.floor(len / 2));
        let flip = end.split("").reverse().join("");
        if(flip === start) {
            return true;
        }
        else {
            return false;
        }
    }
    
    let palText = document.getElementById("text").value.toLowerCase();
    let resultElement = document.getElementById("palResult");
    if(check(palText)) {
        resultElement.textContent = `${palText} is a Palindrome`;
    }
    else {
        resultElement.textContent = `${palText} is not a palindrome`;
    }
})



//Calculation section


let add = document.querySelector(".add");
let minus = document.querySelector(".minus")
let divide = document.querySelector(".divide");
let multiply = document.querySelector(".multiply");

add.addEventListener("click", () => {
    var inputOne = parseFloat(document.querySelector(".inputOne").value);
    var inputTwo = parseFloat(document.querySelector(".inputTwo").value);
    if(!isNaN(inputOne) && !isNaN(inputTwo)) {
        var sum = inputOne + inputTwo;
        document.getElementById("numResult").textContent = sum
    }
    else {
        alert("enter valid numbers")
    }
})

const minuss = () => {
    var inputOne = parseFloat(document.querySelector(".inputOne").value);
    var inputTwo = parseFloat(document.querySelector(".inputTwo").value);
    if(!isNaN(inputOne) && !isNaN(inputTwo)) {
        var sum;
        if(inputOne < inputTwo) {
            sum = inputTwo - inputOne;
        }
        else {
            sum = inputOne - inputTwo;
        }
        document.getElementById("numResult").textContent = sum;
    }
    else {
        alert("enter valid numbers")
    }
}

divide.addEventListener("click", () => {
    var inputOne = parseFloat(document.querySelector(".inputOne").value);
    var inputTwo = parseFloat(document.querySelector(".inputTwo").value);
    
    if(!isNaN(inputOne) && !isNaN(inputTwo)) {
        var sum = inputOne / inputTwo;
        document.getElementById("numResult").textContent = sum;
    }
})

    
multiply.onclick = () => {
    let inputOne = parseFloat(document.querySelector(".inputOne").value);
    let inputTwo = parseFloat(document.querySelector(".inputTwo").value);

    if(!isNaN(inputOne) && !isNaN(inputTwo)) {
        var sum = `${inputOne * inputTwo}`;
        document.getElementById("numResult").textContent = sum;
    }
}