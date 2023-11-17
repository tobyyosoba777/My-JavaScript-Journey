//Check if a word is a palindrome in JavaScript

/*Write a function to check if the supplied string is a palindrome 
Eg: radar, racecar, kayak, and redder ar all palindromes
They are the spelled same backwards and forwards 
*/

let palindrome = function(word) {
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    console.log(start, end);
}

console.log(palindrome('radar'));
console.log(palindrome('kayak'));
console.log(palindrome('window'));


let checkPalindrome = function(word) {
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    console.log(start, end);
}
console.log(checkPalindrome('racecar'))


let palindromeNew = function(word) {
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    let flip = end.split('').reverse().join('');
    return (start === flip)
}
console.log(palindromeNew('lawal'))

let palindromme = function(word) {
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    let flip = end.split('').reverse().join('')
    return (start === flip);
}
console.log(palindromme("reviver")) 

let palindromes = function(word) {
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    let flip = end.split('').reverse().join('');
    return (start === flip);
}

console.log(palindromes('radddar'));

let newPalindrome = function(word) {
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    let flip = end.split('').reverse().join('');
    return(start === flip) 
}
console.log("check " + newPalindrome("ttobott"));

let palindromeProgram = function(word) {
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2 )).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    let flip = end.split('').reverse().join('');
    return (start === flip)
}
console.log("this is the latest :" + palindromeProgram("michhcim"));