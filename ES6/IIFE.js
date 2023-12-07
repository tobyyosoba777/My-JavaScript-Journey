//IIFE - Immediately Invoked Function Expression

function doSomething() {
    //function Declaration
}
var somethingElse = function() {
    //function Expression
}

//Over here the function 'firstword' is what we refer to as an anonymous function and it is not called directly
var logword = function (word) {
    console.log(word);
}
logword("Hello world");

//How to immediately invoke your function expression
(function word(word) {
    console.log(word)
})('Hello i am testing IIFE');

var something = (function (word) {
    console.log(word);
})('HMM IIFE') //This automatically execute without having to call the function because it is immediately invoked funtion (IIFE);



var testing = (function(nm) {
    return {
        "name": nm,
        "age": 19,
        "id": 200129034,
        x:  function(){
            return "Hello";
        }
    }
})("Tobiloba");
console.log(testing.name, testing.age)
testing.x()

let details = (function (nm) {
    return {
        "name": nm,
        "age": 19,
        "id": 200129034,
        x : (function (nam) {
            nam = this.name;
            return nam;
        })
    }
})("Tobiloba");
console.log(details.x())

const details1 = (function(nm) {
    return {
        "name": nm,
        "age": 19,
        "id": 200129034,
        x: (function() {
             console.log(this.name);
        })
    }
})("Osoba")
details1.x()
console.log(details1.age)



const details2 = (function(nm) {
    return {
        "name" : nm,
        "age" : 19,
        "matric_no" : 200129034,
        namee: (function() {
            console.log(this.name)
        }),
        displayAge: (function() {
            word = "The age is";
            console.log(`${word}: ${this.age}`); 
        })
    }
})('Tobiloba Osoba');

console.log(details2.namee())
details2.displayAge()



const myLaptop = (function(nm, model ,drive, processor) {
    return {
        "brand_name": nm,
        "model": model,
        "drive": drive,
        "processor": processor,
        display_drive: (function() {
            console.log(`Drive Details: ${this.drive}`)
        }),
        displayInfo: (function () {
            console.log(`Laptop brand: ${this.brand_name} ${this.model} with a storage of
            ${this.drive} and comes with an ${this.processor} processor\n`);
        })
    }
})('HP', 'Elitebook 8470p', 'Intel SSD 180gb', 'Intel core i5')
myLaptop.display_drive();
myLaptop.displayInfo();



const myPhone = (function(name, storage, ram) {
    return {
        "name": name,
        "storage": storage,
        "ram": ram,
        displayName: (function() {
            console.log(`Phone name: ${this.name}`);
        }),
        displayStorage: (function() {
            console.log(`Storage Capacity: ${this.storage}`);
        }),
        displayRam: (function () {
            console.log(`Ram Info: ${this.ram}`);
        })
    }
})('Infinix smart 5', '32gb', '2gb');

myPhone.displayName();
myPhone.displayStorage();
myPhone.displayRam();




const increment = (function() {
    return function increment(number, value = 1) {
        console.log(`${number + value}`);
    };
})();
increment(20, 5);

//Another Practice
const increment1 = (function() {
    return function increment(num, value = 1) {
        console.log(`${num + value}`)
    }
})()
increment1(20,202);

const increment2 = (function() {
    return function increment2(num, value = 1) {
        console.log(`Sum: ${num + value}`);
    }
})()

const increment3 = (function (num, value = 1) {
    return function() {
        return `${num + value}`
    }
})(220, 405)
console.log(increment3())

const increment4 = (function(num, value = 1) {
    return function(){
        return(`${num + value} mhz`); 
    }
})(111, 1222);
console.log(increment4());

const increment5 = (function (num, value = 1) {
    return function() {
        return `${num + value}`;
    }
})(20, 90)
console.log(increment5())

const increment6 = (function() {
    return function increment6(num, value = 1) {
        console.log(`${num + value}`);
    }
})()
increment6(20, 80)

const mySelf = (function (name, id, height) {
    return {
        "name": name,
        "id": id,
        "height": height,
        displayName: (function () {
            return {
                firstName: (function() {
                    console.log("first name is tobiloba");
                }),
                lastName: (function() {
                    console.log("last name is Osoba");
                })
            }
        }),
        displayId: (function() {
            console.log(`My matric number is: ${this.id}`);
        }),
        displayHeight: (function() {
            console.log(`my height is ${this.height}`);
        })
    }
})("Tobiloba", 200129034, "6'1");
mySelf.displayName().firstName();