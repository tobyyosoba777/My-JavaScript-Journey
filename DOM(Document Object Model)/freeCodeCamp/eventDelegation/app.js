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
        e.target.style.color = "#222";
        console.log(e.target.textContent);
        //or
        console.log(e.target.getAttribute('id') + ' is clicked');
    }
});

// sportsBar.addEventListener("click", (e) => {
//     if(e.target.matches('li')) {
//         e.target.style.color = '#111';
//         e.target.style.backgroundColor = "skyBlue";
//         console.log(e.target.textContent);
//         console.log(e.target.getAttribute('id') + ' is clicked')
//     }
// })

const sports = document.querySelector("#sports");
const newSport = document.createElement('li');

newSport.innerText = 'Rugby'
newSport.setAttribute('id', 'rugby')

sports.appendChild(newSport);

const newSport1 = document.createElement('li');
newSport1.textContent = "Marathon"
newSport1.setAttribute('id', 'marathon');
sports.appendChild(newSport1)

const newSport2 = document.createElement('li');
newSport2.textContent = "Gymnastics";
newSport2.setAttribute('id', 'gymnastic');
sports.appendChild(newSport2)