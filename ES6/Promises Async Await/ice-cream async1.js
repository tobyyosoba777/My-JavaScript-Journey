let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

let order = (fruit_name, call_production) => {
    setTimeout(() => {
        call_production()
        console.log(`${stocks.fruits[fruit_name]} was selected`);
    }, 2000);
}

let production = () => {
    setTimeout(() => {
        console.log(`Production has started`);

        setTimeout(() => {
            console.log(`The fruit has been chopped`);

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    console.log(`The machine was started`);

                    setTimeout(() => {
                        console.log(`Ice cream was served on ${stocks.holder[0]}`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[1]} topping was added`);

                            setTimeout(() => {
                                console.log(`Ice cream served`)
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0)
}

order("2", production)