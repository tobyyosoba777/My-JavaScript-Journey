let closeBtn = document.querySelector('.close-btn')
let modalContainer = document.querySelector('.modal-container');
let openBtn = document.querySelector('.open-btn')

openBtn.addEventListener("click", () => {
    modalContainer.style.display = "block"
})

closeBtn.addEventListener("click", () => {
    modalContainer.style.display = 'none';
})

window.addEventListener("click", (e) => {
    if(e.target === modalContainer) {
        modalContainer.style.display = 'none'
    }
})