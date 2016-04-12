$(document).ready(function () { 
    
    $(".close").hide();
    $(".pop").hide();
    
$(".item").click(function () {
    $(".pop").show();
    $(".pop").animate({"top": "49px"}, "1500");
    $(".close").fadeIn(400);
});
    
$(".close").click(function () {
    $(".pop").animate({"top": "100vh"}, "1500");
    $(".close").fadeOut(200);
    $(".pop").hide(100);
});

    
});