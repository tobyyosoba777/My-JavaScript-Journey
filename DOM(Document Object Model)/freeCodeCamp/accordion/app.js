let accordion = document.getElementsByClassName('content-container');
// let answer = document.getElementsByClassName('answer')

for(i = 0; i<accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle('active')
    })
}