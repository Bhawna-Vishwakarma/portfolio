let dark = document.getElementById("dark");
var links = document.querySelectorAll(".menu-link");
var navbar = document.getElementById("header");
var count=1;
dark.addEventListener( "click" , ()=>{
    count++;
    if(count%2 == 0){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        navbar.style.backgroundColor = "black";
        links.forEach(link => {
            link.style.color ="white";
        });
    }else{
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        navbar.style.backgroundColor = "";
        links.forEach(link => {
            link.style.color ="";
        });
    }
});