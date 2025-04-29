//get items
const navBar = document.getElementById("nav")
      toggleButton = document.getElementById("toggle");

if (navBar) {
    toggleButton.addEventListener("click", toggleNav)
}

function toggleNav () {
    console.log("i got clicked")
    if (navBar.classList.contains("hidden")) {
        navBar.classList.remove("hidden")
    } else {
        navBar.classList.add("hidden")
    }
}