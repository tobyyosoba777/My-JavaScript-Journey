// Beeginers challenge
//Exercise 1

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