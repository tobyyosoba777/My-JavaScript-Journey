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

const arr = [1, 2, 3, 4]
const squared = arr.map((number) => {
    return number **2;
})
console.log(squared);


// Using filter method and arrow function to return odd numbers from an array
const arr2 = [1, 2, 3, 4];
const filterodd = arr2.filter(odd => {
    return odd % 2 !== 0;
})
console.log(filterodd);

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const returnOdd = arr3.filter((odd) => {
    return (odd % 2 != 0);
})
console.log(returnOdd)

const arr4 = [1,2,3,4,5,6,7,8,9];
const returnEven = arr4.filter((even) => {
    return even % 2 === 0;
})
console.log(returnEven);

const arr5 = [1,2,3,4,5,6,7,8,9,10,11,12];
const returnOdds = arr5.filter((item) => {
    return item % 2 != 0;
}) 
console.log(returnOdds)

const newone = () => {return "hello world"}
console.log(newone())


const arr999 = [1,2,3,4,5,6]
const squaree = arr999.map((item) => {
    return item ** 2;
})
console.log(squaree)


//Array Exercise
const items = [
    {name: 'Bike',     price: 100  },
    {name: 'TV',       price: 200  },
    {name: 'Album',    price: 10   },
    {name: 'Book',     price: 5    },
    {name: 'Phone',    price: 500  },
    {name: 'Computer', price: 1000 },
    {name: 'Keyboard', price: 25   }
]

//1-use the filter method to filter out everything that is not up to a 100 dollar

const filteredItems = items.filter((item) => {
    return item.price <= 100;
})
console.log(filteredItems)

//1-use the filter method to filter out everything that is not up to a 200 dollar
const filterItems = items.filter((item) => {
    return item.price <= 200;
})
console.log(JSON.stringify(filterItems))

const filter = items.filter((item) => {
    return item.name === 'Computer'
})
console.log(filter);

