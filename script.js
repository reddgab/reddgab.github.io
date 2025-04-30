
// ==========toggle navbar===============
//get items
const navBar = document.getElementById("nav");
      toggleButton = document.getElementById("toggle");

window.onload=function(){
    toggleButton.addEventListener("click", toggleNav);
    autoHide();
    toggleNav();
    multilanguage();
}

function toggleNav () {
    if (navBar.classList.contains("hidden")) {
        toggleButton.classList.add("active");
        navBar.classList.remove("hidden");
    } else {
        navBar.classList.add("hidden");
        toggleButton.classList.remove("active");
    }
}

// hide navbar when on mobile

function autoHide() {
    if (screen.availWidth < 500) {
        navBar.classList.add("hidden");
    }
}

// animate the hello!

const hello = document.getElementById("hello");
const helloList = ["Hello!", "!لسلام عليكم", "Hallo!", "Bonjour!", "Guten tag!", "Γειά σας!", "שָׁלוֹם!", "नमस्ते!", "Dia duit!", "Salve!", "こんにちは!", "안녕하세요!", "你好!", "สวัสดีครับ!", "Olá!", "Toki!", "Hola!", "Hej!", "Kamusta!", " !مرحبا"];

function multilanguage () {
    
    let i = 0;
    function changeHello () {
        if (i >= helloList.length) {
            i = 0;
        }
        hello.innerHTML = "  ";
        hello.style.transitionDuration = "0s"; 
        hello.style.transform = "translateX(-10%)";

    
        setTimeout(() => { //because if i didn't have this it will run at the same time??
            hello.innerHTML = helloList[i]; 
            console.log(hello.innerHTML);
            hello.style.transitionDuration = "1s";
            hello.style.transform = "translateX(0)"; 
        }, 1);
    i++;
    }
    setInterval(changeHello, 3000);
    
}

