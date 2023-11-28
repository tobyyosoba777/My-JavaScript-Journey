const items = [
    {name: 'Bike',     price: 100  },
    {name: 'TV',       price: 200  },
    {name: 'Album',    price: 10   },
    {name: 'Book',     price: 5    },
    {name: 'Phone',    price: 500  },
    {name: 'Computer', price: 1000 },
    {name: 'Keyboard', price: 25   }
]

const filteredItems = items.filter((item) => {
    return item.price > 100;
})
console.log(JSON.stringify(filteredItems));

const filItems = items.filter((item) => {
    return item.price > 100;
})
console.log(JSON.stringify(filItems));

const names = items.map((item) => {
    return item.name === 'Keyboard';
})
console.log(names);

const foundNames = items.map((item) => {
    return item.name;
})
console.log(foundNames);

const pricesGreaterThan100 = items.filter((item) => {
    return item.price > 100;
})
console.log(JSON.stringify(pricesGreaterThan100))

const prices = items.map((item) => {
    return item.price;
})
console.log(prices);

//use the find method to return the object with the name of book in the array
const foundItems = items.find((item) => {
    return item.name === 'Book';
})
console.log(foundItems);

const pricesFound = items.map((item) => {
    return item.price;
})
console.log(pricesFound);

const foundNamesNew = items.map((item) => {
    return item.name;
})
console.log(foundNamesNew);

const findd = items.find((item) => {
    return item.name === 'Keyboard';
})
console.log(findd);

const filtred = items.filter((item) => {
    return item.price > 200;
})
console.log(JSON.stringify(filtred));

const tred = items.filter((item) => {
    return item.price > 200;
})
console.log(JSON.stringify(tred))

const newii = items.filter((item) => {
    return item.price > 200;
})
console.log(JSON.stringify(newii));

const newio = items.filter((item) => {
    return item.price > 200;
})
console.log(JSON.stringify(newio));

items.forEach((item) => {
    console.log(item.name)
})

items.forEach((item) => {
    console.log(item.price);
})

const finddd = items.some((item) => {
    return item.price <=  100;
})
console.log(finddd)