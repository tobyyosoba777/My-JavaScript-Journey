//A function to check and display happy programmers day

function happyProgrammersDay() {
    const today = new Date();
    const month = today.getMonth() + 1
    return month === 9 && (today.getDate() === 12 || today.getDate() === 13);
}

if (happyProgrammersDay()) {
  console.log("Happy Programmer's Dayy!");
} else {
  console.log("Today is not Programmer's Day.");
};


function isToday15th() {
  var today = new Date();
  var month = today.getMonth() + 1;
  return month === 9 && (today.getDate() === 14 || today.getDate() === 15);
}

if (isToday15th) {
  console.log("Yes today is the 15th of september");
}
else {
  console.log("Today aint the 15th lil nigga");
}
















