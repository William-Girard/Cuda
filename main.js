function adpaterALaTailleDeLaFenetre(){
    var hauteur = document.documentElement.clientHeight;
    var source = document.querySelector('.welcome'); 
    source.style.height = hauteur+'px'; 
    /*var source2 = document.querySelector('.services'); 
    source2.style.minHeight = hauteur+'px';
    var source3 = document.querySelector('.team'); 
    source3.style.minHeight = hauteur+'px';
    var source4 = document.querySelector('.skills'); 
    source4.style.minHeight = hauteur+'px';
    var source5 = document.querySelector('.testimonials'); 
    source5.style.minHeight = hauteur+'px';
    var source5 = document.querySelector('.newsletter'); 
    source5.style.minHeight = hauteur+'px';*/
    
}
function addEvent(element, type, listener){
    if(element.addEventListener){
        element.addEventListener(type, listener, false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type, listener);
    }
}

// On exécute la fonction une première fois au chargement de la page
addEvent(window, "load", adpaterALaTailleDeLaFenetre);
// Puis à chaque fois que la fenêtre est redimensionnée
addEvent(window, "resize", adpaterALaTailleDeLaFenetre);
