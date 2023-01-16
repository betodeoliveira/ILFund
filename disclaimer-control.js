$(".disclaimer-locked-sections").css("display", "none");
$(".disclaimer_denied-wrapper").css("display", "none");

let disclaimerAccepted = sessionStorage.getItem("disclaimerAccepted");
console.log(disclaimerAccepted);

if (disclaimerAccepted == "true") {
    $(".disclaimer-locked-sections").css("display", "block");
}
else {
    $(".disclaimer_trigger-show").click();
}

$(".is-disclaimer-accepted").on("click", function () {
    sessionStorage.setItem("disclaimerAccepted", true);
    $(".disclaimer_denied-wrapper").css("display", "none");
    $(".disclaimer-locked-sections").css("display", "block");
});

$(".is-disclaimer-denied").on("click", function () {
    sessionStorage.setItem("disclaimerAccepted", false);
    $(".disclaimer_denied-wrapper").css("display", "flex");
});