//let is used to declare a variable and a variable can be reassigned or have its
//Value changed but when you declare a constant using the const keyword, it cannot be reassigned
//any attempt to reassign a different value to it later on will result to TypeError in the console 


let rate = 0.3;
const interestRate = 1;

// interestRate = 1;
console.log(interestRate);

let name = 'Tobi'; //String Literal
let age = 1900; //Number Literal
let isApproved = true; //Boolean value 
let middleName = undefined; //undefined
let selectedColor = null;


const arr9 = [
    ["key 1", "value1"],
    ["key2", "value 2"]
  ];
  
  const obj = Object.fromEntries(arr9)
  console.log(obj);