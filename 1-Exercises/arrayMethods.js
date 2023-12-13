// Beeginers challenge
//Exercise 1

//Push even numbers to an array
var arrin = []
for(i = 1; i <= 10; i++) {
    if(i % 2 == 0){
        arrin.push(i)
    }
}
console.log(arrin)

//Sum of Array
const sum = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(sum([1,2,3,4,5,6]))


//Filter odd numbers out
const filterOdd = (arr) => {
    return arr.filter(item => item % 2 !== 0);
}
console.log(filterOdd([1,2,3,4,5,6]))


//Map to double 
const doubled = (arr) => {
    return arr.map(item => item * 2);
}
console.log(doubled([1,2,3,10]));


//Find max number
const maxValue = (arr) => {
    return Math.max(...arr);
}
console.log(maxValue([1,2,4,5,6]))


//Transform To UpperCase
// Question: Create a function that takes an array of strings and transforms each string to uppercase using the map method.
const upper = (arr) => {
    return arr.map(str => str.toUpperCase())
}
console.log(upper(["hello", "name"]))

const upperCase = (arr) => {
    return arr.map(item => item.toUpperCase())
}
console.log(upperCase(["hi", "my", "name", "is", "tobiloba"]))

//Remove Duplicate values from an array
const removeDuplicate = (arr) => {
    return [...new Set(arr)];
}
console.log(removeDuplicate([1,2,3,4,5,6,6,7,8,7]))

const remove = (arr) => {
    return [...new Set(arr)];
}
console.log(remove([1,2,3,4,55,5,5,55,5,55,5,5,5,5,55,5,55,5,5,55,7,8,8,8,7,6,67,765,57,765]))

const sumofSquare = (arr) => {
    return arr.reduce((a, b) => a + b ** 2, 0)
}
console.log(sumofSquare([1,2,3,4]))

//Flatten array
const flattenArray = (arr) => {
    return arr.flat(Infinity);
}
console.log(flattenArray([1,2, [3], [[5,6]]]))

//Multiplication table 
const multiplicationTable = (num) => {
    result = "";
    for(let i = 0; i <= 12; i++) {
        result += `${num} * ${i} = ${num * i}\n`;
    }
    return result
}
console.log(multiplicationTable(11))

const multtable = (num) => {
    result = "";
    for(let i = 1; i<=12; i++) {
        result += `${num} * ${i} = ${num * i}\n`
    }
    return result;
}
console.log(multtable(25))