// Web Storage API

//Not Part of The DOM - refers to the Windows API
//Available to JS via the global variable: window

//We do not have to type window. It is implied.
//The ideal way of using web API is with JSON to store data

window.alert(window.location);
alert(location);

const myObject = {
    name: "Tobi",
    logName: function() {
        console.log(this.name);
    }
}

const arr = ["eat", "sleep", "code"];
myObject.logName();

sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = sessionStorage.getItem("mySessionStore");
console.log(mySessionData); 

sessionStorage.setItem("myStorage", JSON.stringify(myObject));
const data = sessionStorage.getItem("myStorage");
console.log(data);