function dropdown(menu_id, opener_id, closer_id) {
    let mobileNav = document.getElementById(menu_id);
    let menuButton = document.getElementById(opener_id);
    let menuClose = document.getElementById(closer_id);

    menuButton.classList.remove("flex");
    menuButton.classList.add("hidden");

    mobileNav.classList.remove("hidden");
    mobileNav.classList.add("flex");

    menuClose.classList.remove("hidden");
    menuClose.classList.add("flex");
};

function closePane(menu_id, opener_id, closer_id) {
    let mobileNav = document.getElementById(menu_id);
    let menuButton = document.getElementById(opener_id);
    let menuClose = document.getElementById(closer_id);

    menuButton.classList.remove("hidden");
    menuButton.classList.add("flex");

    mobileNav.classList.remove("flex");
    mobileNav.classList.add("hidden");

    menuClose.classList.remove("flex");
    menuClose.classList.add("hidden");
}