let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

// let order = () => {
//     return new Promise((resolve, reject) => {
//         if(true) {
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })
// }
// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()

//Inside this there are three things to learn 
const order = async () => {
    try {
        await abc
    }
    catch(error) {
        console.log("ERROR", error.message)
    }
    finally {
        console.log("runs anyways")
    }
}
order()

const order1 = async () => {
    try {
        await abc
    }
    catch(error) {
        console.log("ERROR", error.message);
    }
    finally {
        console.log("Runs at the end")
    }
}

const order2 = async () => {
    try {
        await abc;
    }
    catch(error) {
        console.log("ERROR: ", error.message);
    }
    finally {
        console.log('This Code will execute anyways')
    }
}
order2().then(() => {
    console.log("This is the ending line");
})