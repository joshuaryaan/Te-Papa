$(document).ready(function () { 

    $(".close").hide();
    $(".pop").hide();
    
    var screenTop = $(document).scrollTop();
    var screenBottom = $(window).scrollTop() + $(window).height();
    
$(".item").click(function () {
    
    $(".search").hide();
    $(".pop").show();
    $(".pop").animate({"top": screenTop + 49 + 'px'}, 400);
    $(".close").fadeIn(400);
    $( ".content" ).delay(400).hide(0);
});
    
$(".close").click(function () {
    
    $( ".content" ).show();
    $(".pop").animate({"top": screenBottom}, 400);
    $(".close").fadeOut(100);
    $(".pop").hide(100);
    $(".search").fadeIn(600);
});
    
});