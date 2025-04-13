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


    //BACK TO TOP
    let backToTop = document.querySelector(".back-to-top");
    backToTop.addEventListener("click", function () {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
    
    window.onscroll = function () { observeBackToTop() };
    
    function observeBackToTop() {
        let topHeight = 400;
        if (document.body.scrollTop > topHeight ||
            document.documentElement.scrollTop > topHeight) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    }
})();