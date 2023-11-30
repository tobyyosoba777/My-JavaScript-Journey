// Beeginers challenge
//Exercise 1

//Sum of Array
const sum = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(sum([1,2,3,4,5,6]))

const suma = (arr) => {
    return arr.reduce()
}

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