let bar = document.querySelector(".fa-bars");
let cancel = document.querySelector(".fa-xmark");
let menuItems = document.querySelectorAll(".menu-item");

// for hidding cancle button from screen directly
if(window.innerWidth <= 819 ){
    cancel.style.display= "none";
}
// enable dropdown
bar.addEventListener("click", ()=>{
    menuItems.forEach(item => {
        item.style.display = "block";
        // disable dropdown on menu-link click
        item.addEventListener("click" ,()=>{
            menuItems.forEach(item => {
                item.style.display = "none";
            })
            bar.style.display= "block";
            cancel.style.display= "none";
        });
    });
    cancel.style.display= "block";
    bar.style.display= "none";
});

// disable dropdown
cancel.addEventListener("click", ()=>{
    menuItems.forEach(item => {
        item.style.display = "none";
    })
    bar.style.display= "block";
    cancel.style.display= "none";
});    
