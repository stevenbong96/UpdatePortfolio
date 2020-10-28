$(document).ready(function () {
    // Add dropdown
    $('select').formSelect();

    // Add sidenav to become mobile responsive
    $('.sidenav').sidenav();

    // Add sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("nav").addClass("stickynav");
        } else {
            $("nav").removeClass("stickynav");
        }
    })

    // Add tooltips
    $('.tooltipped').tooltip();

    $('.carousel').carousel();
});

