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
}