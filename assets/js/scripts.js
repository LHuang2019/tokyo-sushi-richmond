$(document).ready(function(){
    $('.parallax').parallax();
    $('.dropdown-trigger').dropdown({
        coverTrigger: false
    });
    $('#menu-nav').pushpin({
        top: $('#menu-nav').offset().top
    });
    $('.scrollspy').scrollSpy();
    $('.slider').slider({full_width: true});
});