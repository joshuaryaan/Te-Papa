$(document).ready(function () { 

    $(".close").hide();
    $(".pop").hide();
    
$(".item").click(function () {
    $(".pop").show();
    $(".pop").animate({"top": "49px"}, "1500");
    $(".close").fadeIn(400);
    $('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
    });
    $("body *").not(".pop").bind('touchmove', function(e){e.preventDefault()});
});
    
$(".close").click(function () {
    $(".pop").animate({"top": "100vh"}, "1500");
    $(".close").fadeOut(200);
    $(".pop").hide(100);
    $('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
    });
    $('body').unbind('touchmove');
});
    
});