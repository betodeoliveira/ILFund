let navbarAnim = gsap.timeline({
    scrollTrigger: {
        trigger: $(".navbar-trigger"),
        start: "top top",
        end: "top top",
        toggleActions: "play none none reverse",
    }
});

navbarAnim.set($(".navbar_layout"), {height: "4rem"});
navbarAnim.set($(".navbar_brackground"), {opacity: 1});