$(document).ready(function(){
    $(".nav-icon").click(function(){
        $(".full-nav").addClass("open");
    });

    $(".nav-close").click(function(){
        $(".full-nav").remove("open");
    });
})