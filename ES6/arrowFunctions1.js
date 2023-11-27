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

const prices = items.filter((item) => {
    return item.price > 100;
})
console.log(JSON.stringify(prices))