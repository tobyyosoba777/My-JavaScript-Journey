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
            console.log("Which toppings would you like")
        }, 3000);
    });
};

let toppings_choice1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log("Which toppings would you like?") 
        }, 3000);
    }) 
} 

let kitchen = async () => {
    console.log(" A ")
    console.log(" B ")
    console.log(" C ")

    await toppings_choice()
    console.log(" D ")
    console.log(" E ")
}

kitchen()

console.log("Cleaning the dishses")
console.log("Cleaning the tables")
console.log("Taking others orders")