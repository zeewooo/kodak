let goodslistEls = document.querySelectorAll(".goodslist");
let mebtnEl = document.querySelector(".menu");
let menuEl = document.querySelector("#menu");
let menuE2 = document.querySelector("#ximg");


/**
 * 1. forEach
 * 2. addEventListener
 */

goodslistEls.forEach((element,index)=>{
    element.addEventListener("mouseover",()=>{
        element.style.border="1px solid #333333";
    })
    element.addEventListener("mouseout",()=>{
        element.style.border="1px solid #eee";
    })
})



mebtnEl.addEventListener("click",()=>{
    menuEl.style.transform="translateX(0%)";
})

menuE2.addEventListener("click",()=>{
    menuEl.style.transform="translateX(-100%)";
})








var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
    },
    autoplay:{
        delay:4000
    }
   
});
