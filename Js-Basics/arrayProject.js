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


const itemNames = items.map((item) => {
    return item.name;
})
console.log(itemNames)

const iname = items.filter((item) => {return item.price <= 100})











const items1 = [
    {name: 'Apples', price: 230},
    {name: 'Bananas', price: 132},
    {name: 'Pineapples', price: 500},
    {name: 'Oranges', price: 550}
]

const filterItems = items1.filter((item) => {
    return item.price >= 230;
})
console.log(filterItems)

const itemFilter = items1.filter((item) => {
    return item.price == 500;
})
console.log(itemFilter)

const filtertem = items.filter((item) => {
    return item.price >= 200;
})
console.log(filtertem)