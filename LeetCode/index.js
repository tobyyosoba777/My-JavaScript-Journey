// @return {Function}

// var createHelloWorld = function() {
//     return function(...args) {
//         return "Hello World";
//     }
// }

// console.log(createHelloWorld());

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
}

console.log(createHelloWorld())