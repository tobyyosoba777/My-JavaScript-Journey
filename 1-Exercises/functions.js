//Write a JavaScript Function to return the age of a person and it should take the year of birth
function age_calculator(year) {
    output = 0;
    output += 2023 - year;
    console.log("You are " + output + " years old");

}

age_calculator(2004);

function ageCalc(year) {
    output = 0;
    output += 2023 - year;

    console.log("You are approximately " + output + " of age");
}

ageCalc(2004);

function ageCalculator(year) {
    output = 0;
    output+= 2023 - year;

    console.log("You are " + output + " years of age"); 
}

ageCalculator(2000);


function birthYearCalculator(age) {
    output = 0;
    output += 2023 - age;

    console.log("You were born in the year " + "'" + output + "'");
}
birthYearCalculator(19)

//Create a function to take in number and then returns a multiplication table for it
const multiplicationTable = (num) => {
    result = "";
    for(let i = 0; i <= 12; i++) {
        result += `${num} * ${i} = ${num * i}\n`;
    }
    return result;
}
console.log(multiplicationTable(10))

