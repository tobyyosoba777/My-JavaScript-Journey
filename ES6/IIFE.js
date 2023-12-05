//IIFE - Immediately Invoked Function Expression

function doSomething() {
    //function Declaration
}
var somethingElse = function() {
    //function Expression
}

//Over here the function 'firstword' is what we refer to as an anonymous function and it is not called directly
var logword = function (word) {
    console.log(word);
}
logword("Hello world");

//How to immediately invoke your function expression
(function word(word) {
    console.log(word)
})('Hello i am testing IIFE');

var something = (function (word) {
    console.log(word);
})('HMM IIFE') //This automatically execute without having to call the function because it is immediately invoked funtion (IIFE);

var testing = (function() {
    return {
        "name": "Tobiloba",
        "age": 19,
        "id": 200129034
    }
})();