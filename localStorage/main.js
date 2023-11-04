// Web Storage API

//Not Part of The DOM - refers to the Windows API
//Available to JS via the global variable: window

//We do not have to type window. It is implied.
//The ideal way of using web APIs is with JSON to store data

// window.alert(window.location);
// alert(location);

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

const newObj = {
    name: "Tobiloba Gideon Osoba",
    logName: function() {
        console.log(this.name)
    }
}

sessionStorage.setItem("New", JSON.stringify(newObj));
sessionSaved = sessionStorage.getItem("New");
console.log(sessionSaved);

sessionStorage.setItem("new Item", JSON.stringify(newObj));
sessionNew = sessionStorage.getItem("new Item");
console.log(sessionNew);

const newObjects = {
    name: "Tobiosoba",
    email: {
        first: "Tobiosoba777@gmail.com",
        second: "Tobiosoba761@gmail.com"
    },
    emailList: function() {
        console.log(this.email)
    },
    displayName: function() {
        console.log(this.name)
    }
}

sessionStorage.setItem("new_one", JSON.stringify(newObjects));
sessionSavee = sessionStorage.getItem("new_one");
console.log(sessionSavee);


