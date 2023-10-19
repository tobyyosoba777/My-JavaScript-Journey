(function () {
    var a = b = 3;
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