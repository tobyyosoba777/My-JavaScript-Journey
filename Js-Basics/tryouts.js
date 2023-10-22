(function () {
    var a = b = 5;
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