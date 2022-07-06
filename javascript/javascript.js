
// animation aos

window.addEventListener('load',()=>{
    AOS.init();
})


// toggle menu
const toggleMenu = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".nav");
const overlay = document.querySelector(".header-overlay");

toggleMenu.addEventListener('click',toggleNav)

function toggleNav(){
    navMenu.classList.toggle("open");
    toggleMenu.classList.toggle("active");
    overlay.classList.toggle("active");
}

// close nav when clicking on a nav item
document.addEventListener('click',(e)=>{
    if(e.target.closest(".nav-item")){
        toggleNav();
        
    }
})

// sticky header

window.addEventListener('scroll',()=>{
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }else{
        document.querySelector(".header").classList.remove("sticky");
    }
    
})

// menu tabs
const menuTabs = document.querySelector(".nav");
menuTabs.addEventListener('click', (e)=>{

	// console.log(e.target.classList.contains('nav-item'));
    if(e.target.classList.contains("nav-item") && !e.target.classList.contains("active")){
    	
        // const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        // const menuSec = document.querySelector(".menu-section");
        // menuSec.querySelector(".menu-tab-content.active").classList.remove("active");
        // menuSec.querySelector(target).classList.add("active");
    }
})