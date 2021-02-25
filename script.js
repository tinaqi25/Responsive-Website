const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav_links");


const toggleNav =()=>{
    nav.classList.toggle("nav_active");
};


burger.onclick= function(event){
    toggleNav();
};