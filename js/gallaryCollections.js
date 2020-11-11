$(document).ready(function() {

    var c1ArrowLeft = $("#1stCollection #arrowLeft");
    var c1ArrowRight = $("#1stCollection #arrowRight");
    var c1img = $("#collection1");

    c1ArrowLeft.click(function() {
        c1img.hide(80,function() {
            $("#1stCollection").animate({
                height: 'unset',
              });
            c1img.attr("src", "../images/Group4.png");
            c1img.show();
        });

    });

    c1ArrowRight.click(function() {

        c1img.hide(80, function() {
            c1img.attr("src", "../images/Group 2.png");
            c1img.show();
        });

    });

    var c2ArrowLeft = $("#s2ndCollection #arrowLeft");
    var c2ArrowRight = $("#s2ndCollection #arrowRight");
    var c2obj = $("#collection2");

    c2ArrowLeft.click(function() {
        c2obj.hide(80);
        $("iframe").show();
    });

    c2ArrowRight.click(function() {
        $("iframe").hide();
        c2obj.show(80);
        
    });
});