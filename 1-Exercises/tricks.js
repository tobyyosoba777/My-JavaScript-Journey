//Array to Object
var techBrands = [
    "facebook",
    "instagram",
    "Threads",
    "Twitter"
]
const obj = {...techBrands, ...techBrands}
console.log(obj) 

//Fill array with data
var newArray = 
new Array(6).fill("hello");
console.log(newArray);

const objNew= {...newArray}
console.log(objNew)

var duplicates = [
    "new",
    "new",
    "old",
    "old",
    "testers",
    "testers"
]

var newone = Array.from(new Set(duplicates))
console.log(newone)

var one = [
    "one",
    "hello",
    "tobiloba",
    "osoba"
]

var two = [
    "hello",
    "there",
    "michael",
    "sedric",
    "dont even know what that is",
    2,
    "hello i am here again and my name is tobiloba okay so i am knowing what i am what i am doing"
]
var joined = [...one, ...two]
console.log(joined);