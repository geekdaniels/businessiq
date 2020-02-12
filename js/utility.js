// -----------------------------

//   js index
/* =================== */
/*  




*/
// -----------------------------


(function($) {
    "use strict";
    /*---------------------
    mobile menu
    --------------------- */
    jQuery('.stellarnav').stellarNav({
        theme: 'light',
        breakpoint: 960,
        position: 'right',
        phoneBtn: '18009997788',
        locationBtn: 'https://www.google.com/maps'
    });

    /*-----------------
    scroll-up
    -----------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 500,
        animation: 'fade'
    });

    /*---------------------
    smooth scroll
    --------------------- */
    //    $('.smoothscroll').on('click', function(e) {
    //        e.preventDefault();
    //        var target = this.hash;
    //
    //        $('html, body').stop().animate({
    //            'scrollTop': $(target).offset().top - 80
    //        }, 1200);
    //    });



    /*---------------------
    testimonial-carousel
    --------------------- */
    function testimonial_carousel() {
        var owl = $(".testimonial-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
            nav: true,
            items: 2,
            smartSpeed: 2000,
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 2
                }
            }
        });
    }
    testimonial_carousel();


}(jQuery));