//let i=0 is the initialExpression
//i<5 is the condition that has to be true

for (let i=0; i<5; i++) [
    console.log('Hello World' + i)
]

for (let i = 0; i<= 5; i++) {
    console.log("Hello Wolrd " + i);
}

var myVar = 20;
myVar++;
console.log(myVar++);


for (let i=1; i<=5; i++) {
    console.log("Hello Mate"+ i)
}

for (let i=1; i<=5; i++) {
    if (i%2 != 0) {
        console.log(i);
    }
}

//To get the Odd number from a list of 1 to 10
for (let i = 1; i<=10; i++) {
    if (i % 2 != 0) console.log("Odd numbers:", i);
}

for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) console.log(i); 
}

for (let i = 10; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
}

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

for (let i=21; i >= 0; i--){
    if (i % 2 !== 0) console.log(i);
}

var myName = `Tobi`
console.log(myName);


var myArray = [];
var i = 0
while (i<6) {
    myArray.push(i);
    i++;
}
console.log(myArray); 



var arr = []
var i = 0;

while(i<7) {
    arr.push(i);
    i++;
}
console.log(arr);

var arry = [];
var j = [];

while(j<8) {
    arry.push(j);
    j++;
}
console.log(arry);

var myArray = [];

var i = 0;
while (i<5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

var ourArr = [];
for (var i = 0; i < 5; i++) {
    ourArr.push(i);
}
console.log(ourArr);

var newArr = [];
for(var i = 1; i < 6; i++) {
    newArr.push(i);
}
console.log(newArr);


var testArray = [];
for(i = 0; i < 10; i+=2) {
    testArray.push(i);
}
console.log(testArray)

var newTest = [];
for(i = 0; i <= 30; i+=3) {
    newTest.push(i);
}
console.log(newTest);

var testSub = [];
for(i = 0; i <= 100; i+=10) {
    testSub.push(i);
}
console.log(testSub);

var newOne = [];
for(i = 100; i <= 500; i+=100) {
    newOne.push(i);
}
console.log(newOne);

var oddArray = [];
for (var i = 1; i < 10; i+=2) {
    oddArray.push(i);
}
console.log(oddArray);

//Count backwards with a for loop

var backArr = [];
for (var i=5; i > 0; i--) {
    backArr.push(i);
}
console.log(backArr);

var backArr2 = []
for (i = 10; i > 0; i -= 2) {
    backArr2.push(i);
}
console.log(backArr2);

var oddBack = []
for (i=9; i>= 1; i -= 2) {
    oddBack.push(i);
}

console.log(oddBack);

//Return the sum of number in an array
var arrayy = [1,2,3,4,5,6,7,8,9,10,11];
var total = 0

for (i=0; i<arrayy.length; i++) {
    total += arrayy[i];
}
console.log(total);

var add1 = [1,2,3,4,5,6,7,8,89,0,209];
var total = 0;

for(i=0; i<add1.length; i++) {
    total += add1[i];
}
console.log(total);


var add2 = [1,23,45,78, 9, 10, 11, 12];
total = 0;

for(i=0; i<add2.length; i++) {
    total += add2[i];
}
console.log(total);

var add3 = [13,2,45,67,92, 10, 18];
var total = 0;

for(i = 0; i<add3.length; i++) {
    total += add3[i];
}
console.log(total);

var add4 = [1,2,3,4,5,6,7,8,9,10, 12,1,3,4,566,600];
var total = 0;

for(i = 0; i<add4.length; i++) {
    total += add4[i];
}
console.log(total);

var add5 = [12,3,455567,8,90, 190, 129];
var toal = 0;

for(i = 0; i<add5.length; i++) {
    total += add5[i];
}
console.log(total);


var arrin = [];
for(i=0; i<20; i++) {
    arrin.push(i);
}
console.log(arrin);

var empty = [];
for (i=0; i<= 15; i++) {
    empty.push(i);
}

const ann = [0, 20];
function inn(annn) {
    for (i= 0; i<= 20; i++) {
        annn.push(i);
    }
    return annn
}
console.log(inn([1,2,3]))


function newa(anni) {
    for(i = 5; i<=20; i+=2) {
        anni.push(i);
    }
    return anni;
}
console.log(newa([1,3]));


const anna = [1,2,3,4,5,6,7,8,9,10];
addsArray = function() {
    let total = 0;
    for (i=0; i<=anna.length; i++) {
        total += i;
    }
    return total;
}
console.log(addsArray())

testing = function(innput) {
    for(i = 6; i<=50; i+=2) {
        innput.push(i);
    }
    return innput;
}
console.log(testing([2,4]))


const newArray = [1,2,3,4,5,6,76,8,9];
function addingg() {
    let total = 0;
    for(i=0; i<=newArr.length; i++) {
        total += i;
    }
    return total;
}
console.log(typeof newArray)
//Nested Loops 
