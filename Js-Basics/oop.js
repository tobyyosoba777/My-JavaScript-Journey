//Object Oriented Programming
//Class Constructor
//A constructor function is a function that constructs our objects or creates them

class user {
    constructor(email, name) {
        this.email = email;
        this.name = name;

    }
}

var userOne = new user('Tobiosoba777@gmail.com', 'Tobiloba');
var userTwo = new user('Demilade02@yahoo.com', 'demilade');
console.log(userOne);
console.log(userTwo);

class details {
    constructor(name, matric_no, year) {
        this.name = name;
        this.matric_no = matric_no;
        this.year = year
    }
}
var detailsOne = new details('Tobiloba', 200129034, 2020)
var detailsTwo = new details('MIchael', 200129022, 2022)
console.log(detailsOne)
console.log(detailsTwo)



//The 'new' Keyword:
// -  creates a new empty object {}
// -  sets the value of 'this' to be the new empty Object
// -  Calls the constructor method