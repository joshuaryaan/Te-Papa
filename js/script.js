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
    $('.content').bind('touchmove', function(e){e.preventDefault()});
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
    $('.content').unbind('touchmove');
});
    
    $(function() {

  var toolbox = $('.pop'),
      height = toolbox.height(),
      scrollHeight = toolbox.get(0).scrollHeight;

  toolbox.bind('touchmove', function(e, d) {
    if((this.scrollTop === (scrollHeight - height) && d < 0) || (this.scrollTop === 0 && d > 0)) {
      e.preventDefault();
    }
  });

});
    
});