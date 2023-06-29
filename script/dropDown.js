let bar = document.querySelector(".fa-bars");
let cancel = document.querySelector(".fa-xmark");
let menuItems = document.querySelectorAll(".menu-item");

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
