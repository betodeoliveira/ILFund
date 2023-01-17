$(".home-about_info-item").each(function (index) {
    // Configurate the scroll animation
    ScrollTrigger.create({
        trigger: $(this),
        start: "bottom bottom",
        end: "bottom bottom",
        onEnter: () => {
            moveNumberTrackTo($(this).attr("current-track-percentage"));
        },
        onEnterBack: () => {
            moveNumberTrackTo($(this).attr("previous-track-percentage"));
        }
    });
});    

function moveNumberTrackTo(percentage) {
    gsap.to($(".home-about_numbers-track"), {y: percentage, duration: 0.5});
}