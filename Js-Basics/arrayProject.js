const items = [
    {name: 'Bike',     price: 100  },
    {name: 'TV',       price: 200  },
    {name: 'Album',    price: 10   },
    {name: 'Book',     price: 5    },
    {name: 'Phone',    price: 500  },
    {name: 'Computer', price: 1000 },
    {name: 'Keyboard', price: 25   }
]

//Here we are using the filter method to filter items that are not up to a 100 dollar
const filteredItems = items.filter((item) => {
    return item.price <= 100;
})
console.log(filteredItems);

const iname = items.filter((item) => {return item.price <= 100})




//The map method is used to return a specific property
//In an array of objects
const itemPrices = items.map((item) => {
    return item.price;
})
console.log(itemPrices)

const itemNames = items.map((item) => {
    return item.name;
})
console.log(itemNames);

map4 = items.map((item) => {
    return item.name === 'Book';
})
console.log(map4);




//The Find() method helps you find a single object in an array
foundItem = items.find((item) => {
    return item.name === 'Book';
})
console.log(foundItem);

foundItem1 = items.find((item) => {
    return item.price === 200;
})
console.log(foundItem1)

foundItem2 = items.find((item) => {
    return item.name === 'Computer';
})
console.log(foundItem2);

foundItem3 = items.find(item => {return item.name === 'Keyboard'})
console.log(foundItem3);

foundItem4 = items.find((item) => {
    return item.name === 'Phone';
})
console.log(foundItem4);


//forEach does not return anything so you dont need the return statement
//It works like a for loop
//You dont have to write a long for loop statement
//for Each is also used to loop through an array
items.forEach((item) => {
    console.log(item.price);
})

const itemname = items.forEach((item) => {
    console.log(item.name)
})

arr30 = [1,2,4,5,6]

arr30.forEach((item) => {
    console.log(item); 
})


//The .some is used to check if an item has a certain condition
const inexpensiveItem = items.some((item) => {
    return item.price <= 200;
})
console.log(inexpensiveItem);

//Every is used to check whether every member of an array aligns with the condition
const hasInexpensiveItem = items.every((item) => {
    return item.price <= 1000 //True because all items are either up to or less than 1000
})
console.log(hasInexpensiveItem)

//Reduce
//To return the total prices of all the prices in the array
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
    
}, 0) 
console.log(total)

const items0 = [1, 2, 3, 4, 5]

const includesTwo = items0.includes(2)

console.log(includesTwo)


// const items1 = [
//     {name: 'Apples', price: 230},
//     {name: 'Bananas', price: 132},
//     {name: 'Pineapples', price: 500},
//     {name: 'Oranges', price: 550}
// ]

// const filterItems = items1.filter((item) => {
//     return item.price >= 230;
// })
// console.log(filterItems)

// const itemFilter = items1.filter((item) => {
//     return item.price == 500;
// })
// console.log(itemFilter)

// const filtertem = items.filter((item) => {
//     return item.price >= 200;
// })
// console.log(filtertem)