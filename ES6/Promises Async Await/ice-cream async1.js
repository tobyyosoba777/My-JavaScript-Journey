let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`);
    }, 2000);
    call_production()
}

let production = () => {
    setTimeout(() => {
        console.log("production has started");

        setTimeout(() => {
            console.log(`The fruit has been chopped`)

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
            }, 1000);
        }, 2000);
    }, 0);
}

order("2", production)