let palindromme = function(word){
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2));
    let end = word.substring(len - Math.floor(len / 2));
    let flip = end.split('').reverse().join('');
    if (flip === start) {
        return "It is a palindrome"
    } else {
        return "not a palindrome"
    }
}
console.log(palindromme("racecar"))


function palindrome() {
    const word = document.getElementById('word').value.toLowerCase();
    
    function checkk(word) {
        const len = word.length;
        const start = word.substring(0, Math.floor(len / 2)).toLowerCase();
        const end = word.substring(len - Math.floor(len / 2)).toLowerCase();
        const flip = end.split('').reverse().join('')

        if (start === flip) {
            return true;
        }
        else {
            return false;
        }
    }
    const resultElement = document.getElementById('result');

    if(checkk(word)) {
        resultElement.textContent = 'True - It is a palindrome.';
    } else {
        resultElement.textContent = 'False - It is not a palindrome.';
    }
}


function palindrommme() {
    const word = document.getElementById('word').value.toLowerCase();

    function check(word) {
        const len = word.length;
        const start = word.substring(0, Math.floor(len / 2)).toLowerCase();
        const end = word.substring(len - Math.floor(len / 2)).toLowerCase();
        const flip = end.split('').reverse().join('')

        if (start === flip) {
            return true;
        } else {
            return false;
        }
    }

    const resultElement = document.getElementById('result');
    
    if(check(word)) {
        resultElement.textContent = "The word is a palindrome";
    } else {
        resultElement.textContent = "Not a Palindrome";
    }

}

function palindromee() {
    const word = document.getElementById('word').value.toLowerCase();

    function check(word) {
        const len = word.length;
        const start = word.substring(0, Math.floor(len / 2)).toLowerCase();
        const end = word.substring(len - Math.floor(len / 2)).toLowerCase();
        const flip = end.split('').reverse().join('');
        if (flip === start) {
            return true;
        }
        else {
            return false;
        }
    }
    resultElement = document.getElementById('result');

    if (check(word)) {
        resultElement.textContent = 'String is a Palindrome';
    }
    else {
        resultElement.textContent = 'String is not a Palindrome';
    }
}


// function checkPalindrome() {
//     const word = document.getElementById('word').value.toLowerCase(); 


//     function isPalindrome(word) {
//         const len = word.length;
//         for (let i = 0; i < Math.floor(len / 2); i++) {
//             if (word[i] !== word[len - 1 - i]) {
//                 return false; 
//             }
//         }
//         return true; 
//     }

//     const resultElement = document.getElementById('result');

//     if (isPalindrome(word)) {
//         resultElement.textContent = 'True - It is a palindrome.';
//     } else {
//         resultElement.textContent = 'False - It is not a palindrome.';
//     }
// }
