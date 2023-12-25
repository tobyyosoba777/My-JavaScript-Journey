//Selecting Elements
let id = document.getElementById("id");
document.querySelector(".selector"); //Returns the first element that matches the specified CSS selector.
document.querySelectorAll(".selectors") //Returns all nodes that matches the specified CSS selector.
document.getElementsByTagName("div") //Rteurns nodeList of div elements

//Creating Elements
let createdElement = document.createElement("p");
//setting style to createdElement
createdElement.style.color = "#fff";

//Manipulating Elements
let parentElement = document.createElement("div"); //Create a parent div
parentElement.appendChild(createdElement); //Sets this as the child element

element.classList.add(className); //Adds a class to an element.
element.classList.remove(className); //Removes a class from an element.
element.classList.toggle(className); //Toggles the presence of a class on an element.


element.addEventListener(event, handler);  //Attaches an event handler to an element.
element.removeEventListener(event, handler);  //Removes an event handler from an element.