let ul = document.querySelector("ul")
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

//Parent Node Traversal
const html = document.documentElement;
console.log(html.parentNode);
console.log(html.parentElement);

//Child Node Traversal 
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = "skyblue";
const test = ul.childNodes[1].textContent = `Hello World`
const test1 = ul.childNodes[3].textContent = `Hello There`
console.log(test)
console.log(test1);

ul.addEventListener("click", () => {
    ul.childNodes[5].textContent = 'You have Clicked on the ul';
})

ul.childNodes[5].addEventListener("click", () => {
    ul.childNodes[5].textContent = `Clicked Hehe`
    ul.childNodes[7].style.backgroundColor = `red`;
})

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

//Sibling Node Traversal
const div = document.querySelector('div');

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
console.log(div.childNodes);