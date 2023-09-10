//Switch case in JavaScript
//switch statement is an alternative for if else statements

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1: 
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;

        case 4:
            answer = "deltaaaaaa";
            break;
    }

    return answer;
    
}
console.log(caseInSwitch(4));
console.log(caseInSwitch(3));
console.log(caseInSwitch(2));
console.log(caseInSwitch(1));

function caseSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "Alpha";
            break;

        case 2:
            answer = "beta";
            break;
        
        case 3:
            answer = "Gamma";
            break;

        case 4:
            answer = "Delta";
            break;
    }
    return answer;
}

console.log("new one: " + caseSwitch(4));



function switchcase(val) {
    answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }

    return answer;

}
console.log(switchcase(1));


function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
            default: //This also functions as the else keyword
                answer = "only cases are a, b, c "
    }
    return answer;
}
console.log(switchOfStuff(2));

function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break
    }
    return answer;
}
console.log(sequentialSizes(5));





function chainToSwitch(val) {
    var answer = "";
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;

    }
    return answer;
}
console.log(chainToSwitch(42));

function switc(val) {
    var answer = "";
    switch(val){
        case 1:
            answer = "hello";
            break;
        case 2:
            answer = "whats up";
            break
        case 3:
            answer = "yo";
            break;
            default:
                answer = "There are only cases 1,2,3";
    }
    return answer;
}
console.log(switc(2));