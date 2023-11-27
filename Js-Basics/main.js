//Generate Random Function
function randomFunction() {

    return Math.random();
}
console.log(randomFunction());



function randomWholeNumber() {

    return  Math.floor(Math.random() * 20);
}
console.log(randomWholeNumber());

//Math.floor is used to round up numbers
function randNum() {

    return Math.floor(Math.random() * 1000);
}
console.log(randNum());

function randRange(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(randRange(1, 10));

function newRange(myMax, myMin) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(newRange(0,40));

//Using the parseInt function

function convert(str) {
    return parseInt(str);
}
console.log(convert("490"));

//using parseInt with a radix(the radix specifies the base of the number eg base 2)
 function conertt(str) {

    return parseInt(str, 2); //This is gonna specify the base it will be converted from to let it know its in base 2
}
console.log(conertt("10011"));

//Using the conditional (tenary) operator
function checkEquality(a, b) {
    if(a == b) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkEquality(0,"0"));

//Tenary operator
function checkEqual(a, b) {
    return (a==b) ? true : false

    // return a==b;
}
console.log(checkEqual(20,20));

//using multiple conditional tenary operator
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"; 
}
console.log(checkSign(0));

function checkAgain(num) {
    return num > 0? "Positive" : num < 0? "Negative" : "Zero";
}
console.log(checkAgain(20));

function check2(num) {
    return num > 0? "Positive" : num < 0? "Negative" : "Zero";
}
console.log(check2(-10));

//Differences between the var and let keyword
