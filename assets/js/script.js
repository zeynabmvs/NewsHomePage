

jQuery(document).ready(function ($) {
    const hamburgerBtn = $("#jsbtnHamburger");

    hamburgerBtn.click(function () {
        hamburgerBtn.toggleClass("open");

        if (hamburgerBtn.hasClass('open')) {
            //open the menu and show the overlay
            $(".side-menu").addClass("slide-in");
            $(".side-menu").removeClass("slide-out");
            $(".overlay").removeClass("hide");
            $(".overlay").addClass("show");
        } else {
            //close the menu and hide the overlay
            $(".side-menu").addClass("slide-out");
            $(".side-menu").removeClass("slide-in");
            $(".overlay").addClass("hide");
            $(".overlay").removeClass("show");
        }
    });
});