//A single equal sign is an assignment operator while
//A double equal sign is an equality operator
//A triple equal sign is a strict equality operator and it is used to check if the value and "type of" value is same

function testequal(val) {
    if (val == 12) {
        return "Equal";
    } 
    else {
        return "Not Equal";
    }
}

console.log(testequal(12));
console.log(testequal(10));

console.log(3===3); //Returns true because they are same value and same type
console.log(3=="3"); //Returns true because they are same value, this performed a type conversion and converted the string into a number
console.log(3==="3"); //returns false because they are same value but different types one is a number, second is a string
console.log(3 != 3);


function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    else {
        return "Not equal";
    }
}
console.log(compareEquality(10, "10"));
console.log(compareEquality(10, 10));


//Logical operator
//The ampersand operator (&&) is used to run 2 if statements in a single specification

function testLogicalAnd(val) {
    if (val <= 50) {
        if (val >= 25) {
            return "within the range of 25 - 50"
        }
    }
    else {
        return "Not within the range of 25 - 50";
    }
}

console.log(testLogicalAnd(50));



function testlogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Value is within the range of 25-50";
    }
    else if (val <= 75 && val > 50) {
        return "Value is within 51 and 75";
    }
    else if (val <= 100 && val > 75) {
        return "Value withing the range of 76 and 100";
    }
    else if (val <= 125 && val > 100) {
        return "Value within the range of 101 and 125"
    }
    else if (val <= 150 && val > 125) {
        return ""
    }
}
console.log(testlogicalAnd(101));




//Logical or operator 

function testlogicalOr(val) {
    if (val < 10 || val > 20) {
        return "value not within 10 or 20";
    }
    else if (val >= 10 && val <= 20) {
        return("Value is within 10 and 20");
    }
    else {
        return "Nulll";
    }
}
console.log(testlogicalOr(21));



function testsum(val) {
    if (val === 12 || val == 12) {
        return "Value is either 12 or '12' ";
    }
    else {
        return "value is not equal to 12 or at least have a string type";
    }
} 
console.log(testsum('12'));


//Challenge

function checkValidity(val) {
    if (val < 5) {
        return "tiny";
    }
    else if (val < 10) {
        return "small";
    }
    else if (val < 15) {
        return "Medium";
    }
    else if (val < 20 ) {
        return "Large";
    }
    else if (val >= 20) {
        return "Huge";
    }
}
console.log(checkValidity(20));




var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }
    else if (strokes <= par - 2) {
        return names[1];
    }
    else if(strokes == par - 1) {
        return names[2];
    }
    else if (strokes == par) {
        return names[3];
    }
    else if (strokes == par + 1) {
        return names[4];
    }
    else if (strokes == par + 2) {
        return names[5];
    }
    else if (strokes >= par + 3) {
        return names[6];
    }
}
console.log(golfScore(5, 8));

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

console.log(createHelloWorld());
