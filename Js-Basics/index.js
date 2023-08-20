//This is my first JavaScript Code
console.log("Hello World");

let name = "Tobi";
console.log(name);

//Variable Names Cannot Be A Reserved Keyword
//Should Be Meaningful
//Cannot Start With A Number(1name)
//Cannot contain a space or hyphen(-)
//They are case sensitive

let firstName = "Tobi";
let lastName = "Osoba";


//Fetch Api
fetch('https://reqres.in/api/users')
    .then(res => console.log(res))

