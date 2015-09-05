// Typed.js plug-in, credit and thanks to Matt Boldt!
$(function(){
    $(".js-typing-element").typed({
        strings: [
            "First sentence.",
            "Second sentence.",
            "Third sentence.",
            "Fourth sentence.",
            "Fifth sentence."
        ],
        typeSpeed: 150
    });
});

// Owl.Carousel.js plug-in initialization function.
$(document).ready(function() {
    $("#owl-example").owlCarousel({
        singleItem: true,
        autoPlay: 3500,
        stopOnHover: true
    });


});


