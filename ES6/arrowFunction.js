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

//Using the arrow function and const keyword (es6 features) to concatenate a string
const concatenateFunction = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenateFunction([1,5,10], [15, 20])); 

const adding = (arr1, arr2) => arr1.concat(arr2);
console.log(adding([0,0,9], [1,2,3]));

//Find the square of the array
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6]
const findSquare = realNumberArray.map((i) => {
    return i**2
})
console.log(findSquare)


const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x )
    return squaredIntegers;
}
const squaredIntegers = squareList(realNumberArray)
console.log(squaredIntegers);



var arrayney = [1,2,3,4]
const multiplyTest = arrayney.map((num) => {
    return num**2
})
console.log(multiplyTest)

const sFunction = (arr) => {
    const sList = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
    return sList
}
const sList = sFunction(realNumberArray)
console.log(sList)

const mapped = (arr) => {
    const slist = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
    return slist
}
const slist = mapped([-1,-2,0,40, 100]);
console.log(slist)

const newmap = (arr) => {
    const slist = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return slist
}
slists = newmap([-0, 90, 3]);
console.log(slists)

const addNumbers = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(addNumbers([1,2,3,4,5]))


//Better way fo filter numbers greater than 0 and return their squares using filter and map methods
const snew = (arr) => {
    return arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)   
}
console.log(snew([-20, 90, 90, 90]))

const snew2 = (arr) => {
    return arr.filter(num => Number.isInteger(num) && num > 0).map(x => x ** 2)
}
console.log(snew2([90,0,-20, 12]))

const snew3 = (arr) => {
    return arr.filter(num => Number.isInteger(num) && num > 0).map(x => x ** 2)
}
console.log(snew3([20,-10,20,-20,11]))

const snew4 = (arr) => {
    return arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
}
console.log(snew4([-20, 3, 3, 3]))

const snew5 = (arr) => {
    return arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
}
console.log(snew5([-10, 90, 90, 2, 2, 2, 2]))

const snew6 = (arr) => {
    return arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
}
console.log(snew6([-10,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1]))

//Write Higher order arrow functions
const increment = function() {
    return function increment(number, value=1) {
        return number + value;
    }
} ();
console.log(increment(5, 2))
console.log(increment(5)) 

const increment1 = (function() {
    return function increment1(num, value = 1) {
        return num + value;
    }
})
console.log(increment(10, 95))



//Using the rest operator with function parameters
const sumin = (function() {
    return function sum(x, y, z) {
        const args = [x,y,z]
        return args.reduce((a, b) => a+b, 0)
    };
})();
console.log(sumin(90, 90, 80))




//A better way to do the above using the rest function

const sumins = (function() {
    return function sumins(...args) {
        return args.reduce((a, b) => a + b, 0);
    }
})()
console.log(sumins(20,20, 20, 290));

const addup = (function() {
    return function addup(...args) {
        return args.reduce((a, b) => a + b, 0)
    }
})()
console.log(addup(1,2,3,4,5))

//Write an arrow function that reverses a string
const reverseString = (str) => {return str.split("").reverse().join("")}
console.log(reverseString("Tobiloba Osoba")); 
console.log(reverseString("racecaR"))


//A trick i came up with to check if a string is a palindrome haha
const pali = (str) => {
    const a = str.toLowerCase();
    const b = a.split("").reverse().join("");
    if(a == b) {
        return "Palindrome"
    }
    else {
        return "Not a palindrome"
    }
}
console.log(pali("lawal"))
