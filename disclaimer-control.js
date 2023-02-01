// Does the disclaimer component exist on the page?
if ($(".disclaimer-component").length >= 1) {
    let $body = $(document.body);

    setTimeout(() => {
        // Hide the sections to prevent user from scrolling
        $(".disclaimer-locked-sections").css("display", "none");
        $(".disclaimer_denied-wrapper").css("display", "none");

        // Checks if the user already accepted the disclaimer during this session
        let disclaimerAccepted = sessionStorage.getItem("disclaimerAccepted");

        // If true user is free to scroll
        if (disclaimerAccepted == "true") {
            $(".disclaimer-locked-sections").css("display", "block");
        }
        // If not sow the disclaimer window
        else {
            $body.css('overflow', 'hidden');
            $body.css('position', 'relative');
            $(".disclaimer_trigger-show").click();
        }

        // The enabled button gets available if the user selects the correct region
        $(".is-disclaimer-accepted").css("pointer-events", "none");
        $(".is-disclaimer-accepted").css("opacity", "0.5");
        $(".disclaimer_region-warning").css("display", "none");

        // Checks the region that user seelcts
        $("#wf-form-Disclaimer-Form input").on("change", function() {
            let regionValue = $("input[name='Region']:checked").val();
            if(regionValue != "Other country") {
                $(".is-disclaimer-accepted").css("pointer-events", "auto");
                $(".is-disclaimer-accepted").css("opacity", "1");
                $(".disclaimer_region-warning").css("display", "none");
            }
            else {
                $(".is-disclaimer-accepted").css("pointer-events", "none");
                $(".is-disclaimer-accepted").css("opacity", "0.5");
                $(".disclaimer_region-warning").css("display", "block");
            }
        });
        

        // What heppens when user accept the terms
        $(".is-disclaimer-accepted").on("click", function () {
            $body.css('overflow', '');
            $body.css('position', '');
            sessionStorage.setItem("disclaimerAccepted", true);
            $(".disclaimer_denied-wrapper").css("display", "none");
            $(".disclaimer-locked-sections").css("display", "block");
        });

        // What happens if doesn't
        $(".is-disclaimer-denied").on("click", function () {
            sessionStorage.setItem("disclaimerAccepted", false);
            $(".disclaimer_denied-wrapper").css("display", "flex");
        });
    }, 200);
}
else {
    // console.log("Disclaimer will not being shown")
}