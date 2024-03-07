let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

let time = (ms) => {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(resolve, ms) 
        } 
        else {
            reject(console.log("The shop is closed"))
        }
    });
} 

let kitchen = async () => {
    try {
        await time(2000)
        console.log(`${stocks.fruits[0]}`);

        await time(0)
        console.log("Start the production")

        await time(2000)
        console.log("Cut the fruit")

        await time(1000)
        console.log(`${stocks.fruits[0]} and ${stocks.fruits[1]} were added`);
        
        await time(1000)
        console.log("The machine was started")

        await time(2000)
        console.log(`Ice cream was served on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was added on ${stocks.holder[0]}`)

        await time(2000)
        console.log(`Ice cream has been served`);
    }

    catch(error) {
        console.log("Customer Left", error)
    }
    
    finally {
        console.log("Closing hour arrived, Shop Closed")
    }
}

kitchen()