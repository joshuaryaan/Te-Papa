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

    
    document.body.addEventListener('touchmove', function(event) {
      console.log(event.source);
      //if (event.source == document.body)
        event.preventDefault();
    }, false);

    window.onresize = function() {
      $(document.body).width(window.innerWidth).height(window.innerHeight);
    }

    $(function() {
      window.onresize();
    });    
    
});