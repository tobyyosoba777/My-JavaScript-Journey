function greet () {
    //the code inside the fucntion is the body of the function
    console.log("Hello World");
}

greet()

function mention(name, age, skin){
    console.log("i am calling on " + name + ' person is ' + skin + ' in complexion');
}

mention("tobiloba", 19, "fair")

//when declaring a function you dont need to add the semi colon ; at the end of the curly braces
//The variable in the function declaration is called the "parameter"
//whatever value that is passed into the called function is referred to as an argument
//The argument is the actual value supplied to the parameter  

//Performing a task
function greeting(name) {
    console.log("hello " + name);
}

greeting("tobi") //This is called the argument
greeting('Mary')

function greets(name, lastName) {
    console.log("Hello " + name + ' ' + lastName);
}

greets("Tobi" , "Osoba")

//Calculating a value
function square(number) {
    return number * number;
}
console.log(square(2));




//Create a function to modify an array by deleteing the first number and adding a last number
function nextInLine(arr, item) {
    //Code to be executed in the function
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));



//Another One
function nextinline(arr, item) {

    arr.push(item);
    return arr.shift();
}

var arrayy = [2,4,6,8,10];
console.log("Before: " + JSON.stringify(arrayy));
console.log(nextInLine(arrayy, 12));
console.log("After: " + JSON.stringify(arrayy));



//Second One
function nextline(arr, item) {

    arr.push(item);
    return arr.shift();
}

testingArray = [0,1,2,3,4,5]

console.log("before: " + JSON.stringify(testingArray));
console.log(nextline(testingArray, 6));
console.log("after: " + JSON.stringify(testingArray));


function nextLinee(arr, item) {

    arr.push(item);
    return arr.shift();
}

arraY = ["Tobi", "Osoba", 19];
console.log("Before: " + JSON.stringify(arraY));
console.log(nextLinee(arraY, "Gideon"));
console.log("After: " + JSON.stringify(arraY));



function addLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

arrayyy = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(arrayyy));
console.log(addLine(arrayyy, 6));
console.log("After: " + JSON.stringify(arrayyy));



function addItem(arr, item) {
    arr.push(item);
    return arr.shift();
}

array = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(array));
console.log(addItem(array, 6));
console.log("After: " + JSON.stringify(array));




function secondLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

array = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(array));
console.log(secondLine(array, 6));
console.log("After: " + JSON.stringify(array));

