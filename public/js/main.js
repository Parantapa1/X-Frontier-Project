var slideIndex = 0;

$("document").ready(function () {
    showSlide(slideIndex);

    function showSlide(n) {
        var headphones = $(".headphones");
        var headers = $(".header");
        var description = $(".description");
        $("#prev").click(function () {
            if (n > 0) {
                n--;
            }
            else {
                n = 2;
            }
            $(headphones).css("display", "none");
            $(headphones[n]).css("display", "block");
            $(headers).css("display", "none");
            $(headers[n]).css("display", "block");
            $(description).css("display", "none");
            $(description[n]).css("display", "block");

        });
        $("#next").click(function () {
            if (n < 2) {
                n++;
            }
            else {
                n = 0;
            }
            $(headphones).css("display", "none");
            $(headphones[n]).css("display", "block");
            $(headers).css("display", "none");
            $(headers[n]).css("display", "block");
            $(description).css("display", "none");
            $(description[n]).css("display", "block");
        });
    };

});
