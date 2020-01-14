//To get icon
var topIcon = document.getElementById("pageTop");

//When user scrolls down 25px from the top of the page, the icon appears
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        topIcon.style.display = "block";
    }
    else {
        topIcon.style.display = "none";
    }
}

//When user clicks icon, scroll to the top of the page
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}