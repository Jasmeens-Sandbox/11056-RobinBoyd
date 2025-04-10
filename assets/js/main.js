(function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav__list");

    // Toggle menu state
    const toggleMobileMenu = () => {
        const isActive = hamburger.classList.contains("active");
        hamburger.classList.toggle("active", !isActive);
        navMenu.classList.toggle("active", !isActive);
    };

    // Event listeners
    hamburger.addEventListener("click", toggleMobileMenu);
})();