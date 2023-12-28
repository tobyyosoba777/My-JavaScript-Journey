//DOM Manipulation

//Event Delegation

//This allows us to append a single eventListener to a single parent element that
//adds the effect to all of its present and future descendants that match a selector

// document.getElementById("sports").addEventListener("click", (e) => {
//     if(e.target.tagName == "li") {
//         console.log("clicked on ", e.textContent)
//     }
//     console.log("You clicked on: ", e.target.textContent)
// })

let sportsBar = document.querySelector('#sports');
sportsBar.addEventListener("click", (e) => {
    if(e.target.tagName === 'LI') {
        e.target.style.backgroundColor = "#fff";
        e.target.style.color = "#333";
        console.log(e.target.textContent);
        //or
        console.log(e.target.getAttribute('id') + ' is clicked');
    }
});

const sports = document.querySelector("#sports");
const newSport = document.createElement('li');

newSport.innerText = 'Rugby'
newSport.setAttribute('id', 'rugby')

sports.appendChild(newSport);