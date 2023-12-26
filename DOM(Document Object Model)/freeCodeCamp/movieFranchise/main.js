let title = document.getElementById("main-heading");
// title.style.color = "red"
console.log(title);

//This will return an HTMLCollection of all elements with the className of `list-items`
let listItems = document.getElementsByClassName("list-items")
console.log(listItems);


//How to apply a style to all list items (the 5 li's)
for(i = 0; i<listItems.length; i++) {
    listItems[i].style.color = "purple";
}

//getElementsByTagName()
let lists = document.getElementsByTagName("li");
console.log(lists);

//querySelector()
let container = document.querySelector('div')
console.log(container);

//querySelectorAll()
let allDivs = document.querySelectorAll("div");
console.log(allDivs);

//Creating Elements 
const ul = document.querySelector("ul");
const li = document.createElement("li")
li.innerText = "No Time to Die"
// li.classList = "list-items"
// li.style.color = "red";

ul.appendChild(li);
console.log();
li.classList.add('list-items')
console.log(li.classList.contains('list-items'))
console.log(li.getAttribute('class'))

//Using the setAttribute Method


//Modifying the text from the first list-item
const firstListItem = document.querySelector('.list-items')
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);


const findSomething = (() => {
    let findList = document.querySelectorAll(".list-items");
    for(i = 0; i<findList.length; i++) {
        console.log(findList[i].classList.contains('list-items'))
    }
    if(findList[1].textContent === "Star Wars") {
        console.log("true, it contains Star Wars");
    }
    else {
        console.log(false);
    }
})()