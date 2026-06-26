// ===========================
// VATAYAN SCHOOL WEBSITE
// script.js
// ===========================

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href.startsWith("#") && href.length > 1) {
            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


// Sticky Header Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.25)";
    } else {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
    }

});


// Fade-in animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".about, .card, .admission, footer").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "all .8s ease";

    observer.observe(el);

});


// Button hover animation
document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.08)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });
const slides = document.querySelectorAll(".slide");

let current = 0;

function changeSlide(){

slides[current].classList.remove("active");

current++;

if(current >= slides.length){
current = 0;
}

slides[current].classList.add("active");

}

setInterval(changeSlide,4000);
});


// Welcome message
window.addEventListener("load", () => {

    console.log("Welcome to Vatayan School Website");

});
