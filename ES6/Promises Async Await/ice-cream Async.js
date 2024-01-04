let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};


let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();
    }, 2000);
}

let production = () => {
    setTimeout(() => {
        console.log("Production has started");

        setTimeout(() => {
            console.log("The fruit has been chopped");
        }, 2000)
    }, 0);
}

order("2", production); 