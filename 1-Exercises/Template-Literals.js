const person = {
    name: "Tobiloba Osoba",
    age: 19
};

//String Interpolation
const greeting = `hello my name is ${person.name}`;
const age = `Hello, i am ${person.age} years old`
console.log(greeting);
console.log(age);


//Coding Challenge
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
}
 
function createList(arr) {
    const resultDisplay = [];
    for(let i = 0; i<arr.length; i++) {
        resultDisplay.push(`<li class="text-warning">${arr[i]}\n`)
    }
    return resultDisplay
}
console.log(createList(result.success))












function makeList(arr) {
    const resultDisplayArray = [];
    for(let i = 0; i<arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>\n`)
    }
    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray)