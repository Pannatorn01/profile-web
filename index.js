function toggleMenu() {
    const menu = document.querySelector(".mobile-menu-links");
    const icon = document.querySelector(".mobile-menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}