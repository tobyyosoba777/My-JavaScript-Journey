let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("What toppings do you want?")
        }, 3000);
    })
}

let kitchen = async () => {
    console.log('A')
    console.log('B')
    console.log('C')

    await toppings_choice();
    console.log('D')
    console.log('E')
}

kitchen()

console.log('Doing the dishes');
console.log('Cleaning the tables');
console.log('Taking others orders');