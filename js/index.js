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

