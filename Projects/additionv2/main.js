function addNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if(!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;

        document.getElementById('result').textContent = sum;
    }
    else {
        alert("Enter Valid Numbers");
    }
}

function multiplyNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if(!isNaN(num1) && !isNaN(num2)){
        var sum = num1 * num2;

        document.getElementById('result').textContent = sum;
    }
    else {
        alert("Enter Valid Numbers");
    }
}

function divideNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if(!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 / num2;
        document.getElementById('result').textContent = sum;
    }
}

function subtractNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if(!isNaN(num1) && !isNaN(num2)) {
        var sum;
        if(num2 >= num1) {
            sum = num2 - num1;
        }
        else {
            sum = num1 - num2;
        }
        document.getElementById('result').textContent = sum;        
    } else {
        alert("Enter a Valid Number");
    }
}

function subtractNumberss() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if(!isNaN(num1) && !isNaN(num2)) {
        var sum;
        if(num2 >= num1 ) {
            sum = num2 - num1;
        }
        else {
            sum = num1 - num2;
        }
        document.getElementById('result').textContent = sum;
    }
    else {
        alert("Please input valid numbers");
    }
}