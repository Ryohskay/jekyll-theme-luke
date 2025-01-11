function dropdown() {
    let mobileNav = document.getElementById("mobile_nav");
    let menuButton = document.getElementById("menu_sec");
    let menuClose = document.getElementById("menu_close");

    menuButton.classList.remove("flex");
    menuButton.classList.add("invisible");

    mobileNav.classList.remove("invisible");
    mobileNav.classList.add("flex");
    mobileNav.classList.add("flex-col");

    menuClose.classList.remove("hidden");
    menuClose.classList.add("flex");
};

function closePane() {
    let mobileNav = document.getElementById("mobile_nav");
    let menuButton = document.getElementById("menu_sec");
    let menuClose = document.getElementById("menu_close");

    menuButton.classList.remove("invisible");
    menuButton.classList.add("flex");

    mobileNav.classList.remove("flex");
    mobileNav.classList.remove("flex-col");
    mobileNav.classList.add("invisible");

    menuClose.classList.remove("flex");
    menuClose.classList.add("hidden");
}