const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);
const output = document.getElementById('output');

function addNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if(!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;

        document.getElementById('result').textContent = sum;
    }
    else {
        alert("please enter valid numbers")
    }
}