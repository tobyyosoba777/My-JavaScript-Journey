//Destructuring Objects
const personalInformation = {
    firstName : 'Tobiloba',
    lastName : 'Osoba',
    age: 19,
    fave_color: 'red & black'
}
const {firstName: fn, lastName: ln} = personalInformation;
console.log(`${fn}, ${ln}`);

//Object Literals

function address(city, state) {
    const newAddress = {newCity: city, newState: state};

    console.log(newAddress);
}
address("Sparklight", "Lagos")