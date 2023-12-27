// let revealBtn = document.querySelector(".reveal-btn");
// let hiddenContent = document.querySelector(".hidden-content");

// revealBtn.addEventListener("click", () => {
//     if(hiddenContent.classList.contains('reveal-btn')) {
//         hiddenContent.classList.remove('reveal-btn')
//         revealBtn.textContent = "Reveal More"
//     }
//     else {
//         hiddenContent.classList.add('reveal-btn')
//         revealBtn.textContent = `Hide All`
//     }
// });

// let revealBtn = document.querySelector(".reveal-btn");
// let hiddenContent = document.querySelector(".hidden-content")

// revealBtn.addEventListener("click", () => {
//     if(hiddenContent.classList.contains("reveal-btn")) {
//         hiddenContent.classList.remove("reveal-btn")
//         revealBtn.textContent = "Reveal More"
//     }
//     else {
//         hiddenContent.classList.add("reveal-btn")
//         revealBtn.textContent = "Hide All";
//     }
// })

// let revealbtn = document.querySelector(".reveal-btn");
// let hiddenContent = document.querySelector(".hidden-content")

// revealbtn.addEventListener("click", () => {
//     if(hiddenContent.classList.contains("reveal-btn")) {
//         hiddenContent.classList.remove("reveal-btn");
//         revealbtn.textContent = "Reveal More";
//     }
//     else {
//         hiddenContent.classList.add("reveal-btn");
//         revealbtn.textContent = "Hide All";
//     }
// })

let revealBtn = document.querySelector('.reveal-btn');
let hiddenContent = document.querySelector('.hidden-content');

revealBtn.addEventListener("click", () => {
    if(hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn');
        revealBtn.textContent = "Reveal More"
    }
    else {
        hiddenContent.classList.add('reveal-btn');
        revealBtn.textContent = "Reveal More"
    }
})