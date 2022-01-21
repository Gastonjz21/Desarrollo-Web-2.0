function AnimacionLogo(pxPantalla){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var logo = document.getElementById('logo');
        
        if(scroll > pxPantalla){
            logo.style.marginTop = `${10}px`, logo.style.width = `${60}px`, logo.style.height = `${60}px`;
        } else{
            logo.style.marginTop = `${120}px`, logo.style.width = `${350}px`, logo.style.height = `${350}px`;
        }
    })
}

AnimacionLogo(100);

const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector("nav")
const nosotrosA = document.querySelector(".nos")
const marcasA = document.querySelector(".mar")
const productsA = document.querySelector(".pro")
const contactoA = document.querySelector(".con")



navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

nosotrosA.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

marcasA.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

productsA.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

contactoA.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});



