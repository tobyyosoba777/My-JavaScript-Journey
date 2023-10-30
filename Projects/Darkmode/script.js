let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
    if(darkmode.classList.contains("ri-moon-fill")) {
        darkmode.classList.replace("ri-moon-fill", "ri-sun-fill");
        document.body.classList.add("dark");
    }
    else {
        darkmode.classList.replace("ri-sun-fill", "ri-moon-fill")
        document.body.classList.remove("dark");
    }
}



