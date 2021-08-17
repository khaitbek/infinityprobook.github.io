const toggle = document.querySelector(".toggle");
const ul = document.querySelector("ul");
toggle.addEventListener("click",()=>{
    ul.classList.toggle("open")
});
let tl = gsap.timeline({ defaults: { ease: "power1.out" } });
/* tl.to("nav",{
    opacity:1,
    duration:1
})
tl.to("h1",{z
    opacity:1,
    duration:0.5,
    stagger:0
})
tl.to("nav ul",{
    opacity:1,
    duration:0.5,
    stagger:0
}); */



tl.to(".banner",{
    opacity:1,
    duration:1
})
tl.to(".text-content h1",{
    y:"0%",
    opacity:1,
    duration:1
})
tl.to(".banner img",{
    transform:"translateX(0%)",
    opacity:1,
    duration:2.5,
    
})
tl.to(".text-content p",{
    y:"0%",
    opacity:1,
    duration:0.5,
    stagger:0,
    delay:0
},'-=2')
tl.to(".banner-btn",{
    y:"0%",
    opacity:1,
    duration:2,
    stagger:0.5,
    delay:0
},'-=1.5');
let card = document.querySelector(".card");
let banner = document.querySelector(".banner");

   
        tl.to(".card",{
            opacity:1,
            y:"0%",
            delay:0.5
        })
        tl.to(".books h1",{
            opacity:1,
            y:"0%",
            stagger:0.25
        })
    
     
