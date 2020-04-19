$(document).ready(function() {
    // mouse hover effect
    $(".center_button").mouseenter(function() {
        $(".center_button").fadeTo("slow", 0.5);
    });
    $(".center_button").mouseleave(function() {
        $(".center_button").fadeTo("slow", 1);
    });

    // mouse click effect: animations
    $(".center_button").click(function() {
        $(".circle1").fadeTo("slow", 1);
        $(".square1").fadeTo("slow", 1);
        $(".circle1").animate({left: "350px", top: "250px", width: "350px", height: "350px"}, 1000);
        $(".square1").animate({left: "350px", top: "250px", width: "300px", height: "300px"}, 1000);

        $(".circle2").fadeTo("slow", 1);
        $(".square2").fadeTo("slow", 1);
        $(".circle2").animate({left: "1400px", top: "275px", width: "350px", height: "350px"}, 1000);
        $(".square2").animate({left: "1400px", top: "275px", width: "300px", height: "300px"}, 1000);

        $(".circle3").fadeTo("slow", 1);
        $(".square3").fadeTo("slow", 1);
        $(".circle3").animate({left: "500px", top: "750px", width: "225px", height: "225px"}, 1000);
        $(".square3").animate({left: "500px", top: "750px", width: "200px", height: "200px"}, 1000);

        $(".circle4").fadeTo("slow", 1);
        $(".square4").fadeTo("slow", 1);
        $(".circle4").animate({left: "1150px", top: "650px", width: "225px", height: "225px"}, 1000);
        $(".square4").animate({left: "1150px", top: "650px", width: "200px", height: "200px"}, 1000);
    });

});