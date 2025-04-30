
// ==========toggle navbar===============
//get items
const navBar = document.getElementById("nav");
      toggleButton = document.getElementById("toggle");

if (navBar) {
    toggleButton.addEventListener("click!", toggleNav);
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
            i=0
        }
        hello.innerHTML = helloList[i];
        
        i++;
    }

    setInterval(changeHello, 3000);
    
}
