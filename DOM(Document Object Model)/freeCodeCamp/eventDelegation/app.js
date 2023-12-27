//DOM Manipulation

//Event Delegation

//

document.querySelector("#sports").addEventListener("click", (e) => {
    if(e.target.tagName == "li") {
        console.log("clicked on ", e.textContent)
    }
    console.log(e.target.innerHtml)
})