$(document).ready(function(){
resizeDiv();
});

window.onresize = function(event) {
resizeDiv();
}

function resizeDiv() {
vpw = $(window).width();
vph = $(window).height();
$(".viewport").css({"height": vph + "px"});
}


 $(".image").hover(function () {
    $(this).toggleClass(".overlay");
 });

