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