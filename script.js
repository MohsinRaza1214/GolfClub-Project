var crsr =  document.querySelector("#cursor");
var blur =  document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
});


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.7,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#quote1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#quote1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#quote2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#quote1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})
