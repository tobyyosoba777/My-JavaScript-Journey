function one(call_two) {
    call_two()
    console.log("step one is complete please call two")
}

function two() {
    console.log("this is step two")
}

one(two)