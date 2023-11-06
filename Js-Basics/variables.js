var myVar = "FirstLine\nSecondLine\tfirstTabbedSpace \fFormfeed";
console.log(myVar);

//You can concatenate stringss with the plus operator
console.log("i come first " + "i come second");

var a;
console.log(a);

var newString;
console.log(newString);

var ourStr = "I come first";
ourStr += " I come second";
ourStr += '\t' + 4;
console.log(ourStr);

var myName = "Tobiloba";
var condition = ", I am well"
myStr = "My name is " + myName + condition;
console.log(myStr);


//Returning The Length of a string
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = "The string is " + firstName.length + " Characters Long";
console.log(firstNameLength);



var middleName = "Gideon";
var middleNameLength = 0;

middleNameLength = "The string is " + middleName.length + " Characters long";
console.log(middleNameLength);



var lastNameLength = 0;
var lastName = "Lovelace";

var statement = "The String is " + lastName.length + " characters lengthy"
lastNameLength = statement + lastName.length
console.log(statement); 

//Indexing
var firstname = "Ada";
firstLetterOfFirstName = firstname[0];
firstLetterOfLastName = lastName[0];
secondLetterOfLastName = lastName[1];

console.log(firstLetterOfFirstName);
console.log(firstLetterOfLastName);
console.log(secondLetterOfLastName);


//Strings are immutable and you cannot just change an index when reassigning value to a string you have to change the whole character
var newStr = "Jello World"
newStr = "Hello World" 





var lastName = "Lovelace"
var lastLetter = newStr[-1];
var lastletteroflastname = lastName[lastName.length - 1]

console.log(lastletteroflastname);
console.log(newStr);





//To get the last letter of a string 

var middleName = "Gideon";
var lastletterofmiddlename = middleName[middleName.length - 1];
console.log(lastletterofmiddlename);

var firstName = "Tobiloba";
lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);

var lname = "Osoba";
var lastLetterOfLname = lname[lname.length - 1];

console.log(lastLetterOfLname);

strings = "Thee big Dog";
lastletterofstrings = strings[strings.length - 1];
console.log(lastletterofstrings);


//To get the third before last letter in the string
cname = "Towbbie"
lastLetterOfCname = cname[cname.length - 3];
console.log(lastLetterOfCname);

phone1 = "Infinix smart5";
thirdbeforelast = phone1[phone1.length - 3];
console.log(thirdbeforelast);




//Functions 
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    result= "";
    result += myAdjective + " " + myNoun + " can " + myVerb + " " + myAdverb + " Well";
    return result;
}
console.log(wordBlanks("Tobiloba", "Handsome", "Code", "Effectively"));



function prevLaptop(make, year, model, ram, processor, displayDriver) {
    output = "";
    output += "I once used an " + make + " " + model + " Laptop with an " + processor + " Processor and " 
    + displayDriver + " display driver" + " with " + ram + " of RAM " + year + " model" ;

    return output;
}
console.log(prevLaptop("HP", 2012, "Elitebook 8470p", "8gb", `Intel Core i5 3210m`, `AMD Radeon 6470m` ));



//Another Example
function laptop(make, year, model, ram, processor, displayDriver) {
    output = "";
    output += "I use a " + make + " " + model + " Laptop with an " + processor + " Processor and " 
    + displayDriver + " display driver" + " with " + ram + " of RAM " + year + " model" ;

    return output;
}

console.log(laptop("HP", 2013, "Elitebook 8470p", "8gb", `Intel Core i5 3210m`, `Intel HD Graphics 4000` ));

//Practicing
function phone(title, rom, ram) {
    output = "";
    output += "I am using a " + 
    title + " " + " with " + 
    rom + "gb rom and " + 
    ram + "gb ram";
    
    return output;
}

console.log(phone("Infinix Smart 5", 32, 2));



function Card(carrier, amount) {
    output = "";
    output += "I just loaded an " + carrier + " " + Card.name + " Of " + amount + " Naira";
    
    return output;
}

console.log(Card("MTN", 1000));

function networkProvider(carrier, coverage) {
    output = "";
    output += carrier + " " + coverage

    return output;
}
console.log(networkProvider("MTN", "4G LTE"));

function software(title, version, build) {
    output = "";
    output += title + " " + version + " " + build;

    return output;
}
console.log(software("Windows", 11, "Pro" ));


//Template literals
var newt = 32
console.log(`the name is ${newt}`);

var figure = 77
console.log(`The secret number is ${figure}`);

var person = "Tobiloba Osoba Gideon";
console.log(`My name is ${person}`);

var newName = "Michael";
console.log(`This is ${newName}`);





const aNewVar = 110;

function main() {
    const aNewVar = 2
    console.log(`In Main: ${aNewVar}`);
}
main();
console.log(`In Global: ${aNewVar}`);


{
    const aNewVar = 5;
    console.log(`In Bracket: ${aNewVar}`);
}

const personnn = {
    name: 'Tobi',
    age: 19
}

if(personnn.name != null) {
    console.log("has name value");
}

if("name" in personnn) {
    console.log("Has Name Value");
}

function queryAll(strings, ...values) {
    const string = values.reduce((finalString, value, index) => {
        return `${finalString} ${value} ${strings[index + 1]}`
    }, strings[0])

    return document.querySelectorAll(string);
}

const nameFirst = "Tobiloba Osoba";
const language = "JavaScript";
// console.log(bold`My name is ${nameFirst} and i code in ${language}`);
console.log(queryAll`div`);

