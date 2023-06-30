let dark = document.getElementById("dark");
let links = document.querySelectorAll(".menu-link");
let navbar = document.getElementById("header");
let menu = document.querySelector(".menu");
let icon = document.querySelectorAll(".fa-brands");
let count=1;

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