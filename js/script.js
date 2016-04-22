$(document).ready(function () { 

    
    $(".close").hide();
    $(".pop").hide();
    
$(".item").click(function () {
    
    var screenTop = $(document).scrollTop();
    var screenBottom = $(window).scrollTop() + $(window).height();
    
    $(".pop").show();
    $(".pop").animate({"top": screenTop + 49 + 'px'}, "1500");
    $(".close").fadeIn(400);
    $('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
    });
    $('.pop').css({
    'overflow': 'scroll'
    });
    $('body').bind('touchmove', function(e){e.preventDefault()});
});
    
$(".close").click(function () {
    
    var screenTop = $(document).scrollTop();
    var screenBottom = $(window).scrollTop() + $(window).height();
    
    $(".pop").animate({"top": screenBottom}, "1500");
    $(".close").fadeOut(200);
    $(".pop").hide(100);
    $('html, body').css({
    'overflow': 'auto',
    'height': 'auto'
    });
    $('body').unbind('touchmove');
});
    
});