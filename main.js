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

addEvent(window, "scroll", progressBarCircle);


function progressBarCircle(){
    let skills = document.querySelector(".skills");
    let html = document.querySelector("html");
    let animationProgressBar = document.querySelector(".animationProgressBar");
    let aPB = animationProgressBar.classList;
    if(!aPB.contains("fini")){
        if(skills.offsetTop < (html.scrollTop + animationProgressBar.clientHeight)){
            $(".circle_percent").each(function() {
                var $this = $(this),
                $dataV = $this.data("percent"),
                $dataDeg = $dataV * 3.6,
                $round = $this.find(".round_per");
                $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
                $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
                $this.prop("Counter", 0).animate({Counter: $dataV},
                    {
                        duration: 2000, 
                        easing: "swing", 
                        step: function (now) {
                            $this.find(".percent_text").text(Math.ceil(now)+"%");
                        }
                    });
                    if($dataV >= 51){
                        $round.css("transform", "rotate(" + 360 + "deg)");
                        setTimeout(function(){
                            $this.addClass("percent_more");
                            animationProgressBar.classList.add("fini");
                        },1000);
                        setTimeout(function(){
                            $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
                        },1000);
                    } 
                });
            }
        }else if(skills.offsetTop > (html.scrollTop + animationProgressBar.clientHeight)){
            animationProgressBar.classList.remove("fini");
        }
    }
    
    
    