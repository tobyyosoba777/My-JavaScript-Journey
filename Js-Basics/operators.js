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

console.log(3===3) //Returns true because they are same value and same type
console.log(3=="3") //Returns true because they are same value, this performed a type conversion and converted the string into a number
console.log(3==="3") //returns false because they are same value but different types one is a number, second is a string


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

function testLogicalAnd(val) {
    if (val <= 50) {
        if (val >= 25) {
            return "Yes"
        }
    }
    else {
        return "No";
    }
}
