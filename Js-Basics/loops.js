//let i=0 is the initialExpression
//i<5 is the condition that has to be true

for (let i=0; i<5; i++) [
    console.log('Hello World' + i)
]

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

var arrayy = [1,2,3,4,5,6,7,8,9,10,11];
for (i=0; i<arrayy.length; i++) {
    console.log(i)
}


