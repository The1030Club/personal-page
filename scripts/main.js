

//jQuery FadeIn Module

//var fadeInText = $( '#js-fadeInText' );
//
//// When the Document loads completely, fade in the text for 1500 ms
//$( document ).ready(function() {
//  fadeInText.fadeIn(4000);
//});



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
