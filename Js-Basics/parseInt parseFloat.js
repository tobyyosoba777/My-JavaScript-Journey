let log = console.log;
let myInt = 1234;
let myStrInt = "456";
let address = "456 Silicon Valley.";
let myFloat = 677.58;
let myStrFloat = "123.456.789.663";
let cost = "19.99 per box";

//parseInt and parseFloat
log(parseInt(address));

//Parse Float won't throw an error and ask you to need a float it will return the integer
log(parseFloat(address)) 
log(parseFloat(myStrFloat)) // will return the first decimal ending because u cant have multiple decimals within a number