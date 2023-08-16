//Square Brackets are called array literals and they indicate an empty array
// In JavaScript you can store different types(DataTypes) in an array and the length is dynamic
//Technically, an array is an object in JavaScript
//An array is a data structure that we use to represent a list of item

let selectedColors = ['red', 'blue'];

selectedColors[2] = 'green';
selectedColors[3] = 1;

console.log(selectedColors[0]);
console.log(selectedColors[2]);
console.log(selectedColors[3]);
console.log(selectedColors);
console.log(selectedColors.length); //Returns the length of the array


var newArray = ["Tobi", 19];
var myArray = ["Osoba", 19, "Fair", 2004];
console.log(newArray);
console.log(myArray);

//Create a 3 dimensional array in JavaScript
let threeDimensionalArray = [[[1,2,3], ["a", "b", "c"]],
                            [[4,5,6], ["d", "e", "f"]],
                            [[7,8,9], ["g", "h", "i"]]];
console.log(threeDimensionalArray);

let twoDimArray = [["Tobi", 19], ["Hp", "Elitebook 8470p"]];
console.log(twoDimArray);


//Array indexing 
numArray = [50,60,70];
var ourData = numArray[1];
console.log(ourData);

arrayOne = [1,2,3,4];
var arrayOne = arrayOne[0];
console.log(arrayOne);

arrayTwo = [40,50,70,90]
arrayTwo = arrayTwo[1];
console.log(arrayTwo);

arrayThree = [100,200,300];
arrayThree = arrayThree[2];
console.log(arrayThree);

arrayFour = [200,400,600,800];
arrayFour = arrayFour[3];
console.log(arrayFour);

//Modifying Array Data With Indexes
var myNewArray = [18, 64, 99];
myNewArray[myNewArray.length -1] = 22;
console.log(myNewArray);

var arraya = [90,100,110];
arraya[arraya.length - 1] = 120;
console.log(arraya);



//Accessing Multi - Dimensional Arrays With Indexes
var array3 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var array3 = array3[0][0]
console.log(array3);

var array4 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var array4 = array4[3][1];
console.log(array4);


//Modifying Multi - Dimensional Arrays With Indexes
var array5 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
array5[0][3] = 4;
console.log(array5[0]);

//My Exercise (Change 13, 14 to 15, 16)
var arrayChallenge = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
arrayChallenge[3][1] = 15;
arrayChallenge[3][2] = 16;
console.log(arrayChallenge[3][0]);
console.log(arrayChallenge[3][1]);
console.log(arrayChallenge[3]);