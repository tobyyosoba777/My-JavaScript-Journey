//IIFE Stands for Immediately Invoked Function Expression

//Over here the function 'firstword' is what we refer to as an anonymous function and it is not called directly
var logword = function (word) {
    console.log(word);
}
logword("Hello world");

//How to immediately invoke your function expression
(function word(word) {
    console.log(word)
})('Hello i am testing IIFE');