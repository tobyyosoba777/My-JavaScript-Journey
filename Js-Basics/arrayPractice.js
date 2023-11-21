var simpleArray = []
for (i=1; i<=9; i+=2) {
    simpleArray.push(i)
}
console.log(simpleArray);

var minusedArr = []
for (i=9; i>=1; i-=2) {
    minusedArr.push(i);
}
console.log(minusedArr);

var totArray = [1,2,3,4,5,6];
var total = 0;
for(i=0; i < totArray.length; i++) {
    total += totArray[i];
}
console.log(total)

var addedArray = [2,3,4,5,6];
total = 0

for (i=0; i<addedArray.length; i++) {
    total += addedArray[i];
}
console.log(total)