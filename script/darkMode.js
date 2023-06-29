let dark = document.getElementById("dark");
var links = document.querySelectorAll(".menu-link");
var navbar = document.getElementById("header");
var menu = document.querySelector(".menu");
var icon = document.querySelectorAll(".fa-brands");


var count=1;
dark.addEventListener( "click" , ()=>{
    count++;
    // enable dark mode
    if(count%2 == 0){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        navbar.style.backgroundColor = "black";
        menu.style.backgroundColor = "black";
        icon.forEach(i => {
            i.style.color = "#fff";
        });
        links.forEach(link => {
            link.style.color ="white";
        });
    }else{ 
    // disable dark mode
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        navbar.style.backgroundColor = "";
        menu.style.backgroundColor = "";
        icon.forEach(i => {
            i.style.color = "";
        });
        links.forEach(link => {
            link.style.color ="";
        });
    }
});