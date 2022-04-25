jQuery(document).ready(function($) {
    //FIXED HEADER
    window.onscroll = function() {
        if(window.pageYOffset > 140) {
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
        }
    };
    
    //ISOTOPE
    let btns = $("#depoimentos .button-group button");

    btns.click(function(e){
        $("#depoimentos .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $("#depoimentos .grid").isotope({
            filter: selector, 
        });
    });

    $(window).on("load", function(){
        $("#depoimentos .grid").isotope({
            filter: "*",
        });
    });

    //MAGNIFY
    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter: "%curr% de %total%",
        },
    })

    //OWL
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        lazyload: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });
    //ANIMAÇÃO
    const debounce = function(func, wait, immediate){
        let timeout;
        return function(...args){
            const context = this;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    
    const target = document.querySelectorAll('[data-anime');
    const animationClass = 'animate';

    function animeScroll() {
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
        target.forEach(function(element){
            if((windowTop) > element.offsetTop){
                element.classList.add(animationClass);
            }
        })
    }

    animeScroll();
    
    if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
        console.log('dsadsa');
    }, 200));
    }
});