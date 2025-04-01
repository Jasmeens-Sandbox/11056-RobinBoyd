(function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav__list");
    const navLinks = document.querySelectorAll(".nav__link");

    // Toggle menu state
    const toggleMobileMenu = () => {
        const isActive = hamburger.classList.contains("active");
        hamburger.classList.toggle("active", !isActive);
        navMenu.classList.toggle("active", !isActive);
    };

    // Close menu
    const closeMobileMenu = () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    };

    // Event listeners
    hamburger.addEventListener("click", toggleMobileMenu);    
})();