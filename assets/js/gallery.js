$(document).ready(function () {

    $(".project-photo").click(function () {
        $(".photo-middle").find("img").attr("src",$(this).find("img").attr("src"));
        $(".photo-visualizer").fadeIn();
    });
    
    $(".close-gallery").click(function () {
        $(".photo-visualizer").fadeOut();
    });

});