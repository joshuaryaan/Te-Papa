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
    
    var $scroller = $(".pop");
$scroller.bind('touchstart', function (ev) {
    var $this = $(this);
    var scroller = $scroller.get(0);

    if ($this.scrollTop() === 0) $this.scrollTop(1);
    var scrollTop = scroller.scrollTop;
    var scrollHeight = scroller.scrollHeight;
    var offsetHeight = scroller.offsetHeight;
    var contentHeight = scrollHeight - offsetHeight;
    if (contentHeight == scrollTop) $this.scrollTop(scrollTop-1);
});
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