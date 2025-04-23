// Animator functionality for scroll-triggered animations
(function (jasAnimator) {

    /**
     * @typedef {Object} AnimationOptions
     * @property {string} baseTranslateLength - Defines the base distance used for translating elements into view. (e.g., '50px').
     * @property {string} duration - Duration of the animation (e.g., '0.5s').
     * @property {string} defaultAnimation - Default CSS animation class to apply (e.g., 'fadeInUp').
     * @property {number} threshold - IntersectionObserver threshold for triggering animations (between 0 and 1).
     * @property {number} speed - Delay between sequential element animations in milliseconds.
     */

    /** 
     * Default animation configuration options.
     * These values can be customised via `jasAnimator.setOptions`.
     * @type {AnimationOptions}
     */
    let options = {
        baseTranslateLength: '50px',
        duration: '0.5s',
        defaultAnimation: 'fadeInUp',
        threshold: 0.5,
        speed: 50
    };

    /**
     * Updates the animation configuration with user-defined options.
     * Only provided keys will be updated; others remain unchanged.
     *
     * @function setOptions
     * @memberof jasAnimator
     * @param {Partial<AnimationOptions>} newOptions - Object containing one or more properties to override default options.
     * @example
     * jasAnimator.setOptions({ baseTranslateLength: '100px', duration: '1s' });
     */
    jasAnimator.setOptions = function (newOptions) {
        options = Object.assign(options, newOptions);
    };

    // Initialize the animation setup
    (function () {
        const elements = document.querySelectorAll('.animate');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const element = entry.target;

                    // Skip if animation is already done
                    if (element.classList.contains("isDone")) {
                        observer.unobserve(element);
                        return;
                    }

                    // Set CSS properties for animation
                    element.style.setProperty('--translate-length', options.baseTranslateLength);
                    element.style.setProperty('--duration', options.duration);
                    var speed = element.getAttribute("data-speed") || options.speed;

                    // Delay the animation based on index
                    setTimeout(() => {
                        var animationClass = element.getAttribute('data-animation') || options.defaultAnimation;
                        element.classList.add(animationClass, "isDone");
                    }, index * speed);

                    observer.unobserve(element); // Stop observing
                }
            });
        }, { threshold: options.threshold }); // Observe when 50% of the element is visible

        elements.forEach((element) => {
            observer.observe(element); // Observe each element
        });
    })();
})(window.jasAnimator = window.jasAnimator || { __namespace: true });

jasAnimator.setOptions({ baseTranslateLength: '100px' });