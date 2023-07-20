const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 80);
});

const sr = scrollReveal({
    origin: "top",
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal ('.home-text',{delay:300});
sr.reveal ('.home-img',{delay:300});

