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