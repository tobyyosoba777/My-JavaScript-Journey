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
