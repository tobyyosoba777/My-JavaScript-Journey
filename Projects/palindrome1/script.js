function palindrome() {
    const word = document.getElementById('word').value.toLowerCase();

    function check(word) {
        const len = word.length;
        const start = word.substring(0, Math.floor(len / 2));
        const end = word.substring(len - Math.floor(len / 2));
        const flip = end.split('').reverse().join('')

        if (start === flip) {
            return true;
        }
        else {
            return false;
        }
    }
    const resultElement = document.getElementById('result');
    
    if(check(word)) {
        resultElement.textContent = "String is a Palindrome";
    }
    else {
        resultElement.textContent = "Not a Palindrome"
    }
}