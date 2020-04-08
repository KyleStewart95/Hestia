/*
* Sourced from https://stackoverflow.com/questions/44457097/js-change-image-name-on-hover
* The way I knew how to do this was in CSS and for this that would mean manually adding the CSS for every possibility which for our design was not possible.
* This was the best and easiest way I could think of.
* This just replaces the images.png to _hover.png and this will be the same for everything that is added to this specific class
* for navIcon it changes the icon with a different the exact same icon but white when the user hovers on it and changes it back when the remove the mouse.
* The userAreaIcon changes the image to have the same image but with a blue outline behind it.
* The userAreaIcon will have to be changed with something else in the future but this works for a place holder in the mean time.
* */

$(document).ready(function() {
    $(".navTopIcon").mouseover(function ()
    {
        $(this).attr("src", $(this).attr("src").replace(".png", "_hover.png"));
        $(".test").text($(this).attr("src"));
    }).mouseout(function ()
    {
        $(this).attr("src", $(this).attr("src").replace("_hover.png", ".png"));
        $(".test").text($(this).attr("src"));
    });
})

$(document).ready(function() {
    $(".navMidIcon").mouseover(function () {
        $(this).attr("src", $(this).attr("src").replace(".png", "_hover.png"));
        $(".test").text($(this).attr("src"));
    }).mouseout(function () {
        $(this).attr("src", $(this).attr("src").replace("_hover.png", ".png"));
        $(".test").text($(this).attr("src"));
    });
})

$(document).ready(function() {
    $(".navBotIcon").mouseover(function () {
        $(this).attr("src", $(this).attr("src").replace(".png", "_hover.png"));
        $(".test").text($(this).attr("src"));
    }).mouseout(function () {
        $(this).attr("src", $(this).attr("src").replace("_hover.png", ".png"));
        $(".test").text($(this).attr("src"));
    });
})

window.onload = function() {
    var oTextbox = document.getElementById('myTextBox');
    for (var i = 0; i < document.images.length; i++) {
        document.getElementsByClassName('imageInfo')[i].onclick = function() {
            oTextbox.value = this.alt;
        };
    }
};