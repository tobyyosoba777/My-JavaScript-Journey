//DOM Manipulation

//Event Listeners

let buttonTwo = document.querySelector('.btn-2');
const url = `https://github.com`;

buttonTwo.addEventListener("click", () => {
    alert(`You have clicked on example 2, visit: ${url}`)
})


//Second method to do this
const alertBtn = () => {
    alert(`You have clicked on example 2, visit: ${url}`);
}

buttonTwo.addEventListener("click", alertBtn);

//Change background of Box 3 on mouseover
let newBackgroundColor = document.querySelector('.box-3');

newBackgroundColor.addEventListener("mouseover", () => {
    newBackgroundColor.style.backgroundColor = "red";
})
