function reusableFunction() {
    console.log("Hello World");
}

reusableFunction();

//Create a function that takes number input with 2 parameters and subtracts them
function functionWithArgs(a, b) {
    console.log(a-b);
}
functionWithArgs(10, 5);

//Create a function with 3 parameters that accepts numbers and the 3 together
function functionwithargs(a,b,c) {
    console.log(a+b+c);
}
functionwithargs(20,48,39);

function operationSum(a,b,c) {
    console.log(a+c * (b));
}
operationSum(2,5,10); //Will follow BODMAS rule.







//Global and Local variable

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5; 
    //If you dont use var to define a variable inside a function 
    //it becomes a global variable that can be accessed in another function
}

function fun2() {
    var output = "";
    if (typeof myGlobal != undefined) {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != undefined) {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);

}
fun1();
fun2();


function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();
// console.log(myVar);

var myGlobal = 10;

function fun1() {
     oopsGlobal = 5;
}

function fun2() {
    output = "";
    if(typeof myGlobal != undefined) {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != undefined) {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}


fun1();
fun2();

//If you define a local variable in a function and global variable with the same name, the local variable takes precedence over the global variable

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "Sweater";

    return outerWear;
}
console.log(myOutfit());

//Return a value from a function with return statement