//Selecting Elements
let id = document.getElementById("id"); 
let selector = document.querySelector(".selector"); //Returns the first element that matches the CSS selector.
let selectors = document.querySelectorAll(".selectors") //Returns nodes that matches the CSS selector.
let divs = document.getElementsByTagName("div") //Returns nodeList of div elements

//Creating Elements
let createdElement = document.createElement("p");

//setting style to createdElement
createdElement.style.color = "#fff";

//Manipulating Elements
let parentElement = document.createElement("div");  //Create a parent div
parentElement.appendChild(createdElement);         //Sets this as the child element
parentElement.textContent = "Added Text";         //Sets this as the content in the div tag

element.classList.add(className);           //Adds a class to an element.
element.classList.remove(className);        //Removes a class from an element.
element.classList.toggle(className);        //Toggles the presence of a class on an element.


element.addEventListener(event, handler);      //Attaches an event handler to an element.
element.removeEventListener(event, handler);  //Removes an event handler from an element.