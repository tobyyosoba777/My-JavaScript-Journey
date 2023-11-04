const myObject = {
    name: "Tobi Osoba",
    hobbies: ["eat", "code", "code"],
    logName: function() {
        console.log(this.name);
    }
}; 

localStorage.setItem("myLocalStore", JSON.stringify(myObject));
localData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(localData);