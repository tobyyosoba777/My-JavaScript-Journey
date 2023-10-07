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
        "album": "ABBA Gold"
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
    else if(prop === "artist") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value;
    }
    return collection;
}



//Alter values below to test your code
// updateRecords(5439, "artist", "ABBA")
console.log(updateRecords(5439, "artist", "ABband"));