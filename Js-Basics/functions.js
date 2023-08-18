function greet () {
    //the code inside the fucntion is the body of the function
    console.log("Hello World");
}

greet()

function mention(name, age, skin){
    console.log("i am calling on " + name + ' person is ' + skin + ' in complexion');
}

mention("tobiloba", 19, "fair")

//when declaring a function you dont need to add the semi colon ; at the end of the curly braces
//The variable in the function declaration is called the "parameter"
//whatever value that is passed into the called function is referred to as an argument
//The argument is the actual value supplied to the parameter  

//Performing a task
function greeting(name) {
    console.log("hello " + name);
}

greeting("tobi") //This is called the argument
greeting('Mary')

function greets(name, lastName) {
    console.log("Hello " + name + ' ' + lastName);
}

greets("Tobi" , "Osoba")

//Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));

//Create a function to 
