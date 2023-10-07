var multiply = (a,b) => {
    return a * b
}

var square = ((a,b) => {
    return(a**b)
})

console.log(square(3,3))

console.log(multiply(40,8))

var statement = () => {
    return "I love javascript";
}
console.log(statement());

var newWord = () => {
    return "I am gradually understanding ES6";
}
console.log(newWord())

var multiply = function(a,b) {
    return a*b;
}
console.log(multiply(6,6))

var multiplyy = (a,b) => {
    return a*b;
}
console.log(multiplyy(60,9));

var divide = ((a,b) => {
    return a/b;
});
console.log(divide(10,5));

var divider = (b,a) => {
    return b/a;
}
console.log(divider(10,2));

var subtractNumber = (a,b) => {return a-b}
console.log(subtractNumber(10,7));
