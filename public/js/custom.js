$(document).ready(function(){
 $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
       
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    $(".header-mobile-menu").click(function(){
        $(".header").toggleClass("open-menu");

    });

});