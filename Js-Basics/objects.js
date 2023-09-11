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