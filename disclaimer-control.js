if ($(".disclaimer-component").length >= 1) {
    let $body = $(document.body);

    setTimeout(() => {
        $(".disclaimer-locked-sections").css("display", "none");
        $(".disclaimer_denied-wrapper").css("display", "none");

        let disclaimerAccepted = sessionStorage.getItem("disclaimerAccepted");
        console.log(disclaimerAccepted);

        if (disclaimerAccepted == "true") {
            $(".disclaimer-locked-sections").css("display", "block");
        }
        else {
            $body.css('overflow', 'hidden');
        $body.css('position', 'relative');
            $(".disclaimer_trigger-show").click();
        }

        $(".is-disclaimer-accepted").on("click", function () {
            $body.css('overflow', '');
            $body.css('position', '');
            sessionStorage.setItem("disclaimerAccepted", true);
            $(".disclaimer_denied-wrapper").css("display", "none");
            $(".disclaimer-locked-sections").css("display", "block");
        });

        $(".is-disclaimer-denied").on("click", function () {
            sessionStorage.setItem("disclaimerAccepted", false);
            $(".disclaimer_denied-wrapper").css("display", "flex");
        });
    }, 200);
}
else {
    console.log("Disclaimer will not being shown")
}