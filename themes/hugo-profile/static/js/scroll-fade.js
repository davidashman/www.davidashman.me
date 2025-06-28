document.addEventListener('DOMContentLoaded', function() {
    const scrollArrow = document.querySelector('.scroll-down-arrow');

    if (scrollArrow) {
        window.addEventListener('scroll', function() {
            // Get the current scroll position
            const scrollPosition = window.scrollY;

            // Define the scroll threshold (e.g., 100 pixels)
            const scrollThreshold = 100;

            if (scrollPosition > scrollThreshold) {
                scrollArrow.classList.add('fade-out');
            } else {
                scrollArrow.classList.remove('fade-out');
            }
        });
    }
});
