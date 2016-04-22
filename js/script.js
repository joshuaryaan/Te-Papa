$(document).ready(function () { 

    $(".close").hide();
    $(".pop").hide();
    
    var screenTop = $(document).scrollTop();
    var screenBottom = $(window).scrollTop() + $(window).height();
    
$(".item").click(function () {
    
    $(".pop").show();
    $(".pop").animate({"top": screenTop + 49 + 'px'}, "1500");
    $(".close").fadeIn(400);
    $('body').css('overflow', 'hidden');
    $( ".content" ).hide();

});
    
$(".close").click(function () {
    
    $( ".content" ).show();
    $(".pop").animate({"top": screenBottom}, "1500");
    $(".close").fadeOut(200);
    $(".pop").hide(100);
    $('body').css('overflow', 'auto');

});
    
});