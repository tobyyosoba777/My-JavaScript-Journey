export const addition = (a, b) => a + b

export function greet(name) {
    "Used to greet any name passed in as an argument"
    return `Hello, i greet you ${name}`;
}

export function emotions(str) {
    let emote = ["happy", "sad", "moody"];

    if (str.toLowerCase() === emote[0]) {
        return `So glad to hear that you are ${str.toLowerCase()}`;
    }
    else if(str.toLowerCase() === emote[1]) {
        return `I am sorry to hear that you are ${str.toLowerCase()}`;
    }
    else if(str.toLowerCase() === emote[2]) {
        return `Why are you actually ${this.str.toLowerCase()}`;
    }
}

export function palindrome(word) {
    let len = word.length;
    let start = word.substring(0, Math.floor( len / 2)).toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    let flip = end.split("").reverse().join("");
    if (flip === start) {
        return `${word} is a palindrome`;
    }
    else {
        return `${word} is not a palindrome`;
    }
}