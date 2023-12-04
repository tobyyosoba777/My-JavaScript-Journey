//Print a table containing multiplication tables for num 5:

num = 5
for(let i = 1; i<= 12; i++) {
    console.log(`${num} * ${i} = ${num * i}`) 
}

const newmult = (num) => {
    let result = "";
    for(let i = 1; i <= 12; i++) {
        result +=  `${num} * ${i} = ${num * i}\n`
    }
    return result;
}
console.log(newmult(6))

const newmul = (num) => {
    let result = "";
    for(i = 1; i <= 12; i++) {
        result += `${num} * ${i} = ${num * i}\n`;
    }
    return result;
}
console.log(newmul(13));

const tryagain = (num) => {
    let result = "";
    for(i = 1; i <= 12; i++) {
        result += `${num} * ${i} = ${num * i}\n`;
    }
    return result
}
console.log(tryagain(14));

//Flatten array
const flattenArray = (arr) => {
    return arr.flat(Infinity);
}
console.log(flattenArray([1,2,34,5,[[3,4,5], 99], [[89]], [[2345]]]))