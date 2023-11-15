(function () {
    var a = b = 10;
})();

// console.log(a);
console.log(b);

const queue = [];
queue.unshift('X');
queue.unshift('Y');
queue.unshift('Z');

console.log(queue);

console.log(queue.shift());
console.log(queue.shift());

console.log(hello());
// console.log(goodbye()); This won't execute

function hello() {
    return 'Hello World';
}

var goodbye = function() {
    return 'Goodbye World';
}

const range =  Array.from({length: 5}, (_, index) => 
index + 1);
console.log(range);

function greet() {
    return 'Good Afternoon';
}
console.log(typeof greet);
console.log(typeof greet());