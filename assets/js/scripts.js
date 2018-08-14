$(document).ready(function(){
    $('.parallax').parallax();
        $('.slider').slider({full_width: true});
    $('.dropdown-trigger').dropdown({
        coverTrigger: false
    });
    $('#menu-nav').pushpin({
        top: $('#menu-nav').offset().top
    });
    $('.scrollspy').scrollSpy();

});