/* =================================== */
/*           Custom js Section
/* =================================== */

$(document).ready(function () {
    // header section nav items active class add/remove
    $("header nav ul.navbar-nav li").click(function () {
        $("header nav ul.navbar-nav li").removeClass("active");
        $(this).addClass("active");
    });  
});

/* ========================================================================= */
/*  animate effect js
/* ========================================================================= */

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: false
});
wow.init();

/* ========================================================================= */
/*  why choose us section circle custom
/* ========================================================================= */

$(document).ready(function () {
    // circle items add or remove active class on click.
    $(".circle-items").click(function () {        
        $(".circle-items").removeClass("active");
        $(this).addClass("active");         
    });  
    // circle items add or remove active class on hover.
    $(".circle-items").hover(function () {
        $(".circle-items").removeClass("active");
        $(this).addClass("active");
    }); 

    //series wise circle item and center content hide/show on click.
    $(".circle-item-first").click(function () {       
        $(".center-circle-item").removeClass("display-block")
        $(".center-circle-item-first").addClass("display-block");
    });  

    $(".circle-item-second").click(function () {
        $(".center-circle-item").removeClass("display-block")
        $(".center-circle-item-second").addClass("display-block");
    });  

    $(".circle-item-third").click(function () {
        $(".center-circle-item").removeClass("display-block")
        $(".center-circle-item-third").addClass("display-block");
    });  

    $(".circle-item-fourth").click(function () {
        $(".center-circle-item").removeClass("display-block")
        $(".center-circle-item-fourth").addClass("display-block");
    });  

    $(".circle-item-five").click(function () {
        $(".center-circle-item").removeClass("display-block")
        $(".center-circle-item-fifth").addClass("display-block");
    });  

    //series wise circle item and center content hide/show on hover.
    $(".circle-item-first").hover(function () {
        $(".center-circle-item").removeClass("display-block")
        $(".center-circle-item-first").addClass("display-block");
    });

    $(".circle-item-second").hover(function () {
        $(".center-circle-item").removeClass("display-block")
        $(".center-circle-item-second").addClass("display-block");
    });

    $(".circle-item-third").hover(function () {
        $(".center-circle-item").removeClass("display-block")
        $(".center-circle-item-third").addClass("display-block");
    });

    $(".circle-item-fourth").hover(function () {
        $(".center-circle-item").removeClass("display-block")
        $(".center-circle-item-fourth").addClass("display-block");
    });

    $(".circle-item-five").hover(function () {
        $(".center-circle-item").removeClass("display-block")
        $(".center-circle-item-fifth").addClass("display-block");
    });  
});
   

