$(document).ready(function () { 

    
    $(".close").hide();
    $(".pop").hide();
    
$(".item").click(function () {
    
    var screenTop = $(document).scrollTop();
    var screenBottom = $(window).scrollTop() + $(window).height();
    
    $(".pop").show();
    $(".pop").animate({"top": screenTop + 49 + 'px'}, "1500");
    $(".close").fadeIn(400);
    $('body').css('overflow', 'hidden');

});
    
$(".close").click(function () {
    
    var screenTop = $(document).scrollTop();
    var screenBottom = $(window).scrollTop() + $(window).height();
    
    $(".pop").animate({"top": screenBottom}, "1500");
    $(".close").fadeOut(200);
    $(".pop").hide(100);
    $('body').css('overflow', 'auto');

});
    
});