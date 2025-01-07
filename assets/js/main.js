function dropdown() {
    let mobileNav = document.querySelector("#mobile_nav");
    let menuButton = document.querySelector("#hamburger")

    mobileNav.classList.toggle("hidden")
    mobileNav.classList.toggle("flex");
    mobileNav.classList.toggle("flex-col");
    menuButton.classList.toggle("rotate-90");
};