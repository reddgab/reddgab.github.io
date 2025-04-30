
// ==========toggle navbar===============
//get items
const navBar = document.getElementById("nav")
      toggleButton = document.getElementById("toggle");

if (navBar) {
    toggleButton.addEventListener("click", toggleNav)
}

function toggleNav () {
    if (navBar.classList.contains("hidden")) {
        toggleButton.classList.add("active")
        navBar.classList.remove("hidden")
    } else {
        navBar.classList.add("hidden")
        toggleButton.classList.remove("active")
    }
}

// hide navbar when on mobile

function autoHide() {
    console.log("well the  command ran")
    if (screen.availWidth < 500) {
        navBar.classList.add("hidden")
        console.log("it worked")    
    }
}