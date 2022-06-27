let menu = document.querySelector(".menu");


window.addEventListener("scroll", () =>{
    let srlY = scrollY;
    if (srlY > 40){
        menu.classList.add("active");
    }
    else {
        menu.classList.remove("active");
    }
})