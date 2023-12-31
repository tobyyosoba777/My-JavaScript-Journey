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


var testob = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];
console.log(testObj[playerNumber]);

testob[12] = 'Namah';
console.log(testob[12]);

//Adding properties to our object
testObj.namme = "nonnnn";

console.log(testObj.namme);

//Deleting properties from our object
delete myDog.friends;
console.log(myDog.friends); //This will return undefined because the property has been deleted from line 84


function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    result = lookup[val];
    return result;
};
console.log(phoneticLookup("delta"))



function miniDictionary(val) {
    var output = "";
    var randomWordObject = {
        "apple": "a round fruit with red, yellow, or green skin and firm white flesh",
        "book": "a written or printed work consisting of pages glued or sewn together along one side and bound in covers",
        "car": "a four-wheeled road vehicle that is powered by an engine and is able to carry a small number of people",
        "dog": "a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice",
        "computer": "an electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program",
        "Serendipity": "The occurrence and development of events by chance in a happy or beneficial way.",
        "Ephemeral": "Lasting for a very short time.",
        "Ubiquitous": "Present, appearing, or found everywhere.",
        "Sycophant": "A person who acts obsequiously towards someone important in order to gain advantage.",
        "Esoteric": "Intended for or likely to be understood by only a small number of people with a specialized knowledge or interest.",
        "Quixotic": "Exceedingly idealistic; unrealistic and impractical.",
        "Nefarious": "Wicked, villainous, or criminal.",
        "Panacea": "A solution or remedy for all difficulties or diseases.",
        "Cacophony": "A harsh, discordant mixture of sounds.",
        "Sycophant": "A person who acts obsequiously towards someone important in order to gain advantage."
        };
      output = randomWordObject[val];
      return output;
}

console.log(miniDictionary("dog"));

function meaning(val) {
    var item = {
        "name": "tobi"
    }
    output = item[val];
    return output;
}
console.log(meaning("name"));


function dictionary(word) {
    items = {
        "battery": "component used to power devices",
        "laptop": "portable computers used for computing computational tasks",
        "html": "Hyper Text Markup Language used to define web structures",
        "css": "Cacading Style Sheet used to define the presentation and to beautify webpages",
        "JavaScript": "High level programming language used to define the behaviour of webpages"
    }
    output = items[word];
    return output;
}

console.log(dictionary("JavaScript"));

function dictt(word) {
    words = {
        "a": "The 1st letter of the alphabet",
        "b": "The 2nd letter of the alphabet",
        "c": "The 3rd letter of the alphabet"
    }
    output = words[word];
    return output;
}
console.log(dictt("c"));





//Function to check if object has a specific property
var myObj = {
    "one": 1,
    "two": 2,
    "three": "the third letter"
}


function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        // return myObj[checkProp];
        return checkProp + " existssssss"
    }
    else {
        return "Not Found";
    }
}
console.log(checkObj("one"));

function checkp(prop) {
    if(myObj.hasOwnProperty(prop)) {
        return myObj[prop];
        return prop + "has been foundddddd";
    }
    else {
        return "property not found";
    }
}
console.log(checkp("three"));

obj = {
    "brother": "michael",
    "sister": "demi",
    "main_character": "tobi",
    "mom": "juliana",
    "dad": "babatunde"
}

function checkobj(prop) {
    if (obj.hasOwnProperty(prop)) {
        return obj[prop];
    }
    else {
        return "Not Found";
    }
}
console.log(checkobj("brother"));



//another trial
function checkob(prop) {
    if(obj.hasOwnProperty(prop)) {
        return obj[prop];
    }
    else {
        return "Not Found";
    }
}
console.log(checkob("mom"));




//Manipulating Complex Objects
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },

    {
        "artist": "NF",
        "title": "Hope",
        "release_year": 2022,
        "formats": [
            "Youtube Video"
        ]
    }
    
]

//Accessing Nested Objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

var content = myStorage.car.outside.trunk;
console.log(content);


//Another Example
var data = {
    "myHome": {
        "inside": {
            "chair": "green",
            "dining": "not_found",
            "kitchen": "average",
            "rooms": 3
        },

        "outside": {
            "bulb": 1,
            "foot mat": 1
        }
    }
};
var kitchenInfo = data.myHome.inside.kitchen;
console.log(kitchenInfo);


var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]  
    }
];

var tree = myPlants[1]
console.log(JSON.stringify(tree));

var secondTree = myPlants[1].list[1];  //To get the second tree in the second object list
console.log(secondTree);

var plants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var myFaveTree = plants[0].list[2];
console.log(myFaveTree);

var plantsss = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "tree",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

faveType = plantsss[1].type;
faveTreee = plantsss[1].list[2];

console.log(faveTreee);
console.log("My fave part of nature are: " + faveType + "s");




//Record Collection
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "let it rockk",
            "You give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1990",
        "artist": "Princee",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
}
var collectionCopy = JSON.parse(JSON.stringify(collection));
console.log(collectionCopy);

var datarandom = {
    "first": {
        "name": "tobiloba",
        "age": 19,
        "level": 300,
        "otherNames": [
            "Gideon",
            "Osoba"
        ]
    },

    "second": {
        "name": "Demilade",
        "age": 21,
        "level": 400,
        "other names": [
            "Benedicta",
            "osoba"
        ]
    },
    "third": {
        "name": "Michael",
        "age": 13,
        "class": "sss2A",
        "other names": "Oluwatomisiin"
    }
}

dataRandomCopy = JSON.parse(JSON.stringify(datarandom));
console.log(dataRandomCopy);
console.log(datarandom);

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "let it rock",
            "you give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Golddd"
    }
};

//Keep a copy of collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
console.log(collectionCopy)

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    }
    else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value;
    }



    return collection;
}

function updateRecords(id, prop, value) {
    if(value === "") {
        delete collection[id][prop];
    }
    else if(prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value;
    }

    return collection;
}

function updateRecords(id, prop, value) {
    if(value === "") {
        delete collection[id][prop];
    }
    else if(prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value;
    }

    return collection;
}

function updateRecords(id, prop, value) {
    if(value === "") {
        delete collection[id][prop];
    }
    else if(prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value;
    }
    return collection;
}

function updateRecords(id, prop, value) {
    if(value === "") {
        delete collection[id][prop];
    }
    else if(prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value;
    }
    return collection
}

//Alter values below to test your code
// updateRecords(5439, "artist", "ABBA")
console.log(updateRecords(5439, "artist", "ABband"));


var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "Unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
]

function lookUpProfile(name, prop) {
    for(var i = 0; i<contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No Such Property";
        }
    }
    return "No Such Content"
}

data = lookUpProfile("Akira", "likes");
console.log(data);


function lookUpProfilee(name, prop) {
    for(var i = 0; i<contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No Such Property exists";
        }
    }
    return name + " Not Found In Contacts";
}
var newData = lookUpProfilee("tobi", "firstName");
console.log(newData);

//ANOTHER
function lookup(name, prop) {
    for(var i = 0; i<contacts.length; i++) {
        if(contacts[i].firstName === name || contacts[i].lastName === name) {
            return contacts[i][prop] || "property does not exist";
        }
    }
    return name, " Does not exist";
}
var dataNew = lookup("Holmes", "firstName");
console.log(dataNew);

contactsNew = [
    {
        "firstName": "Tobiloba",
        "lastName": "Osoba",
        "Course": "Computer Science",
        "netWorth": "50 Million USD"
    },
    {
        "firstName": "Michael",
        "lastName": "Osoba",
        "Course": "Computer Science",
        "netWorth": "10 million USD"
    }
]

function lookupp(name, prop) {
    for(var i = 0; i<contactsNew.length; i++) {
        if(contactsNew[i].firstName === name || contactsNew[i].lastName === name) {
            return contactsNew[i][prop] || "Property " + prop + " Not Found";
        }
    }
    return "Name is non-existent";
}
var find = lookupp("Tobiloba", "netWorth");
console.log(find);

cars = [
    {
        "brandName" : "Lamborghini".toLowerCase(),
        "model" : "Aventador",
        "colors": ["red", "yellow", "white", "green", "skyBlue"]
    },
    {
        "brandName" : "Rolls Royce",
        "model" : "Boat Tail",
        "colors": ["white", "shyBlue"]
    }
]

function looking(name, prop) {
    for(var i = 0; i < cars.length; i++) {
        if(cars[i].brandName === name || cars[i].model === name) {
            return cars[i][prop] || prop + " Not Found";
        }
    }
    return name + " not found"
}
findCar = looking("lamborghini", "colors");


//Prevent object mutation

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    }
    Object.freeze(MATH_CONSTANTS)

    try {
        MATH_CONSTANTS.PI = 99
    }
    catch( ex ) {
        console.log(ex)
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);



//ProtoTypes
function personnn(fname, lname) {
    this.firstname = fname,
    this.lastName = lname
}

personnn.prototype.getFullname = function() {
    return this.firstname + " " + this.lastName;
};
const person1 = new personnn("Mark", "Zuckerberg");
const person2 = new personnn("linus", "torvalds");
console.log(person2)




//Convert Array to object
const arr10 = [
    ["key 1", "value1"],
    ["key2", "value 2"]
  ];
  
  obj1 = Object.fromEntries(arr10)
  console.log(obj1);



const arr11 = [
    ["key 1", "value1"],
    ["key2", "value 2"]
];


obj = Object.fromEntries(arr11)
console.log(obj);

const toBeConverted = [
    ["Key 1", "Hello World"],
    ["Key 2", "This is a key value"],
    ["Key 3", "I am testing"]
]
var converted;
converted = Object.fromEntries(toBeConverted);
console.log(converted);


//createUser is the static method
class User {
    static createUser(username, email) {
      return new User({ username, email });
    }
  }
  
const user1 = User.createUser("john", "john@example.com");
console.log(user1); // { username: "john", email: "john@example.com" }





//Object.fromEntries() for Object transformations
const object1 = {a:1, b:2, c:3}

const object2 = Object.fromEntries(
    Object.entries(object1).map(([key, val]) => [key, val * 2])
)
console.log(object2)

const test1 = {a:2, b:4, c:6}
const test2 = Object.fromEntries(
    Object.entries(test1).map(([x, y]) => [x, y *2])
)
console.log(test2);

const sumr = (function () {
    return function sumr(...args) {
        b = args.reduce((p, t) => p + t, 0)
        console.log(b)
    }
})()
sumr(20, 20, 20, 20, 20, 40);

//Using destructuring assignment to assign variables from Objects
var voxel = {x: 1.21, y: 9.1, z: 7.91};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

var {x : a, y : b, c : z} = voxel;

const AVG_TEMPERATURE = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperature) {
    const {tomorrow : tempOfTomorrow} = avgTemperature;
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURE))  

const LOCAL_FOREST = {
    yesterday: {min: 71.5, max: 88.77},
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTomorrow(forecast) {
    const maxOfT = `The max of tomrorrow is: ${forecast.tomorrow.max}`;
    return maxOfT;
}

console.log(getMaxOfTomorrow(LOCAL_FOREST));


const getMinOfYesterday = ((forecast) => {
    return function getMinOfYesterday () {
        const minOfT = `Yesterday's min: ${forecast.yesterday.min}`
        return minOfT;
    }
})(LOCAL_FOREST);
console.log(getMinOfYesterday())

const getMaxOfToday = ((forecast) => {
    return function getMaxOfToday() {
        const maxOfT = `Today's Max: ${forecast.today.max}`;
        return maxOfT;
    }
})(LOCAL_FOREST);
console.log(getMaxOfToday())

const getMinOfTomorrow = ((forecast) => {
    return function getMinOfTomorrow() {
        const minOfT = `Tomorrow's min: ${forecast.tomorrow.min}`;
        console.log(minOfT);
    }
})(LOCAL_FOREST);
getMinOfTomorrow();

const getMinOfToday = ((forecast) => {
    return function getMinOfToday() {
        const minOfT = `Today's min: ${forecast.today.min}`;
        console.log(minOfT)
    } 
})(LOCAL_FOREST)
getMinOfToday();

LOCAL_DATA = {
    name: {first: "Tobiloba", middle:"Gideon", last: "osoba"},
    school: {matric_no: 200129034, department: "Economics education"}
}

const firstName = ((data) => {
    return function firstName() {
        const fName = `First Name: ${data.name.first}`
        console.log(fName);
    }
})(LOCAL_DATA);
firstName()

const lastName = ((data) => {
    return function lastName() {
        const lName = `Last Name: ${data.name.last}`;
        console.log(lName);
    }
})(LOCAL_DATA);
lastName();

const lastname = ((data) => {
    return function lastname() {
        const llname = `Last name: ${data.name.last}`;
        console.log(llname);
    }
})(LOCAL_DATA);
lastname();


//Using Destructuring Assignment to pass an Object as a function's parameter

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function () {
    return function half(stats) {
        console.log(`(${(stats.max + stats.min) / 2})`);
    }
})(stats)
console.log(stats);
half(stats)


const halves = (function() {
    return function halves({ max, min }) {
        return `${(max + min) / 2}`;
    }
})();
console.log(halves(stats));


//Another challenge
const ages = {
    Demi: 21,
    Tobi: 19,
    Michael: 13
}

const calculate = (function() {
    return function calculate(ages) {
        console.log(`${(ages.Demi + ages.Tobi + ages.Michael) * 2}`);
    }
})(ages);
console.log(ages)
calculate(ages)


const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Tobiloba", 19, "Male"));

const createPerson1 = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("Michael", 13, "Male"));

const createPerson2 = (name, age, gender) => {
    console.log({
        name: name,
        age: age,
        gender: gender
    });
};
createPerson2("Demilade", 21, "Female");