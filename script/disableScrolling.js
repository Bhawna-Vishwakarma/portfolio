// Disable scrolling when the page loads
if(window.innerWidth <= 1200 ){
    window.addEventListener("load", function () {
        document.body.style.overflow = "hidden";
    });
    
    // Enable scrolling when a navigation link is clicked
    var navLinks = document.querySelectorAll(".nav-link");
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function () {
        document.body.style.overflow = "scroll";
        });
    }
}