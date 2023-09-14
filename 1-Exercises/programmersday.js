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


















