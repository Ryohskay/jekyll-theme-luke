function dropdown() {
    let mobileNav = document.getElementById("mobile_nav");
    let menuButton = document.getElementById("menu_sec");
    let menuClose = document.getElementById("menu_close");

    menuButton.classList.remove("flex");
    menuButton.classList.add("hidden");

    mobileNav.classList.remove("hidden");
    mobileNav.classList.add("flex");
    mobileNav.classList.add("flex-col");

    menuClose.classList.remove("hidden");
    menuClose.classList.add("flex");
};

function closePane() {
    let mobileNav = document.getElementById("mobile_nav");
    let menuButton = document.getElementById("menu_sec");
    let menuClose = document.getElementById("menu_close");

    menuButton.classList.remove("hidden");
    menuButton.classList.add("flex");

    mobileNav.classList.remove("flex");
    mobileNav.classList.remove("flex-col");
    mobileNav.classList.add("hidden");

    menuClose.classList.remove("flex");
    menuClose.classList.add("hidden");
}