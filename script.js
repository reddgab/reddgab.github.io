// ===================== animations =====================
// elements
    
const greeting = document.getElementById('greeting');
const portrait = document.getElementById('portrait');

// if (screen.availWidth > 500) {
//     greeting.setAttribute("data-aos", "fade-up");
//     greeting.setAttribute("data-aos-delay", "50");
    



// }


const pills = document.querySelectorAll('.pills')

for (i = 0; i < pills.length; i++) {
    pills[i].setAttribute("data-aos", "fade-up");
    pills[i].setAttribute("data-aos-delay", (50*i));
    pills[i].setAttribute("data-aos-offset", "700px");
    // pills[i].setAttribute("data-aos-anchor", "#skills");
    

}

const contributions = document.getElementById("contributiongrid").children;

for (i=0; i < contributions.length; i++) {
    contributions[i].setAttribute("data-aos", "fade-up");
    contributions[i].setAttribute("data-aos-delay", (50*i));

}

const links = document.querySelectorAll('.contacts');
for (i=0; i < links.length; i++) {
    links[i].setAttribute("data-aos", "fade-right");
    links[i].setAttribute("data-aos-delay", (50*i));
    links[i].setAttribute("data-aos-anchor", "#contact");

}




// ==========toggle navbar===============
//get items
const navBar = document.getElementById("nav");
      toggleButton = document.getElementById("toggle");

window.onload=function(){
    toggleButton.addEventListener("click", toggleNav);
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
if (screen.availWidth > 500) {
    toggleNav();
}


// animate the hello!

const hello = document.getElementById("hello");
const helloList = ["Hello!", "!لسلام عليكم", "Hallo!", "Bonjour!", "Guten tag!", "Γειά σας!", "שָׁלוֹם!", "नमस्ते!", "Dia duit!", "Salve!", "こんにちは!", "안녕하세요!", "你好!", "สวัสดีครับ!", "Olá!", "Toki!", "Hola!", "Hej!", "Kamusta!", " !مرحبا"];

function multilanguage () {
    
    var i = 0;
    function changeHello () {
        hello.innerHTML = "  ";
        hello.style.transitionDuration = "0s"; 
        hello.style.transform = "translateX(-10%)";

    
        setTimeout(() => { //because if i didn't have this it will run at the same time??
            hello.innerHTML = helloList[i];
            hello.style.transitionDuration = "1s";
            hello.style.transform = "translateX(0)"; 
        }, 1);
        if (i + 1 >= helloList.length) {
            i = 0;
        } else {
            i++
        }
    }
    setInterval(changeHello, 3000);
    
}

