// @return {Function}

// var createHelloWorld = function() {
//     return function(...args) {
//         return "Hello World";
//     }
// }

// console.log(createHelloWorld());


//Function to return Hello World
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
}

console.log(createHelloWorld())

// Given an integer n, return a counter function. This counter function 
// initially returns n and then returns 1 more than the previous value 
// every subsequent time it is called (n, n + 1, n + 2, etc).

var createCounter = function(n) {
    
    return function() {
        let curr = n;
        n+=1;
        return curr;
    };
};


