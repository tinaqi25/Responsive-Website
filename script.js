const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav_links");
const lineOne = document.querySelector(".one");
const lineTwo = document.querySelector(".two");
const lineThree = document.querySelector(".three");


const toggleNav =()=>{
    nav.classList.toggle("nav_active");
    lineOne.classList.toggle("cross");
    lineTwo.classList.toggle("cross");
    lineThree.classList.toggle("cross");
};


burger.onclick= function(event){
    toggleNav();
    
};