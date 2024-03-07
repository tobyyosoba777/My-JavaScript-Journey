let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time);
        }
        else {
            reject(console.log("Our Shop is currently closed"))
        }
    })
}

order(2000, () => console.log(`${stocks.fruits[1]} was selected`))

.then(() => {
    return order(0, () => console.log("Production has started"))
})
.then(() => {
    return order(2000, () => console.log("The fruit has been chopped"));
})
.then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})
.then(() => {
    return order(1000, () => console.log(`The machine was started`))
})
.then(() => {
    return order(2000, () => console.log(`The Ice-Cream was served on the ${stocks.holder[0]} container`))
})
.then(() => {
    return order(3000, () => console.log(`The ${stocks.toppings[0]} topping was added`))
})
.then(() => {
    return order(2000, () => console.log("Ice cream has been served"))
})

.catch(() => {
    console.log("Customer left")
})

.finally(() => {
    console.log("Day ended, shop is closed");
})