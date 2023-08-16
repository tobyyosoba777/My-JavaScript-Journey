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

var statement = "The string is "
firstNameLength = statement + firstName.length + " Characters Long";
console.log(firstNameLength);


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
console.log(prevLaptop("HP", 2012, "Elitebook 8460p", "8gb", `Intel Core i5 2520m`, `AMD Radeon 6470m` ));



//Another Example
function laptop(make, year, model, ram, processor, displayDriver) {
    output = "";
    output += "I use a " + make + " " + model + " Laptop with an " + processor + " Processor and " 
    + displayDriver + " display driver" + " with " + ram + " of RAM " + year + " model" ;

    return output;
}

console.log(laptop("HP", 2013, "Elitebook 8470p", "8gb", `Intel Core i5 3210m`, `Intel HD Graphics 4000` ));



