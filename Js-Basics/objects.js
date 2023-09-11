let name = 'Tobi';
let age = 19;

//The curly praces {} is called object literal
let person = {
    name: "Tobi",
    age: 19
};

//Dot Notation
person.name = "Gideon"

//Bracket Notation
let selection = 'name';
person[selection] = "Osoba"

console.log(person.name);



//Build JavaScript Objects
var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!"]
};


//Accessing object properties with dot notation
var myDog = {
    "name": "Jules",
    "skin": "White",
    "tails": 1,
    "legs": 4,
    "friends": ["mae", "ellie"]
}
console.log(myDog.friends);

var testObject = {
    "watch": "Rolex",
    "phone": "Apple",
    "laptop": "Apple"
}

var watchBrand = testObject.watch;
var phoneBrand = testObject.phone;
var laptopBrand = testObject.laptop;

console.log(watchBrand);


//Accessing object properties with bracket notation
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
}

var entree = testObj["an entree"];
var drink = testObj["the drink"];
var sideMeal = testObj["my side"];