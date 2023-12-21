let name1 = "Tobiloba";
let name2 = "Osoba";

let examples = `${name1}
${name2}`


//Using the .textContent is faster during DOM manipulation because it renders faster to the browser but removes whitespaces
document.getElementById("example").innerText = examples;

