let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}




let order = (fruit_name, call_prodction) => {

    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`)
    }, 2000)

    call_prodction()
}

let production = () => {

}

order("2", production);