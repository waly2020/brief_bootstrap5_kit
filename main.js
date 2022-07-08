let menu = document.querySelector(".menu");
const back_para = document.querySelectorAll(".back_para");

window.addEventListener("scroll", () =>{

    let srlY = scrollY;

    anime_back_para(srlY);

    if (srlY > 40){
        menu.classList.add("active");
    }
    else {
        menu.classList.remove("active");
    }
})

function anime_back_para(scrollY){
    back_para.forEach(para => {
        console.log(para.getBoundingClientRect().top,scrollY);
    })
}
anime_back_para(scrollY);