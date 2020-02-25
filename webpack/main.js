//BOOTSTRAP JS
//import "bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';
import WOW from 'wow.js';
// import Popper from 'popper.js/dist/umd/popper.js';
// import '../node_modules/jquery-match-height/dist/jquery.matchHeight-min.js';
// import '../node_modules/jquery.nicescroll/dist/jquery.nicescroll';


// OWL CAROUSEL 
require('./jsFiles/owl.carousel.min.js');

var speed = $('.testimonials__slider').attr('id');
if (speed) {
    $('.testimonials__slider').owlCarousel({
        loop: true,
        nav: true,
        items: 3,
        center: true,
        navSpeed: 500,
        smartSpeed: 450,
        margin: 0,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1,
            },
            767: {

            },
            991: {
                items: 3
            }
        }
    });
}

$('.services-detail__slider').owlCarousel({
    loop: true,
    nav: true,
    items: 4,
    // center: true,
    navSpeed: 500,
    smartSpeed: 450,
    margin: 0,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    navText: ["", ""],
    responsive: {
        0: {
            items: 1,
        },
        767: {

        },
        991: {
            items: 3
        }
    }
});

var speed = $('.clients__testimonials').attr('id');
if (speed) {
    $('.clients__testimonials').owlCarousel({
        loop: true,
        nav: true,
        center: true,
        navSpeed: 500,
        margin: 0,
        dots: false,
        dragEndSpeed: 300,
        autoplay: false,
        items: 1,
        navText: ["", ""],
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            991: {
                items: 1
            },
            1199: {
                items: 1
            }
        }
    });
}

$('.clients__testimonials').owlCarousel({
    loop: true,
    nav: true,
    center: true,
    navSpeed: 500,
    margin: 0,
    dots: false,
    dragEndSpeed: 300,
    autoplay: false,
    items: 1,
    navText: ["", ""],
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 1
        },
        991: {
            items: 1
        },
        1199: {
            items: 1
        }
    }
});

$('.clients__testimonials').owlCarousel({
    loop: true,
    nav: true,
    center: true,
    navSpeed: 500,
    margin: 0,
    dots: false,
    dragEndSpeed: 300,
    autoplay: false,
    items: 1,
    navText: ["", ""],
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 1
        },
        991: {
            items: 1
        },
        1199: {
            items: 1
        }
    }
});



// HEADER RESPONSIVE BUTTON =========================

$('.header-btn').on('click', function(event) {
    $('.header').toggleClass('open');
});

// WOW ANIMATION ===============================
require('./jsFiles/wow.min.js');
new WOW().init();

// SUBSCRIBE FORM ================================
$('.subscribe .button.start').on('click', function(event) {
    $(this).addClass('hide');
    $('.email-input').toggleClass('show');
});
$('.email-input .button.submit').on('click', function(event) {
    $('.email-input').addClass('hide');
    $('.done').toggleClass('show');

});

//CONTACT FORM ANIMATION ==========================================
$('.contact-form input:not([type=submit])').each(function() {
    $(this).on('focus', function() {
        $(this).parent().next().next().addClass('label-anima');

    }).on('blur', function() {
        $(this).parent().next().next().removeClass('label-anima');
    })
})

$('.contact-form textarea').on('focus', function() {
    $(this).parent().next().next().addClass('label-anima');

}).on('blur', function() {
    $(this).parent().next().next().removeClass('label-anima');
})