/* I had to write this early in unit 3 bc I can't visualize or get 
 * my welcome.index page to work without handling the testimonials per my
 * site plan in unit 1. I'll switch this to GSAP later because it's really
 * clunky and hacky.
 */

document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let currentIndex = 0;
    let intervalId = null;
    // time to move = the rate of n, and transition to adjust the time from a to b
    const intervalTime = 1500; 
    const transitionDuration = 3000; 

    function updateCarousel() {
        const itemWidth = items[0].clientWidth;
        const offset = -currentIndex * itemWidth;
        carouselWrapper.style.transition = `transform ${transitionDuration / 1000}s ease-in-out`;
        carouselWrapper.style.transform = `translateX(${offset}px)`;
    }

    function startCarousel() {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        }, intervalTime);
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    carouselWrapper.addEventListener('mouseenter', () => {
        stopCarousel();
    });

    // listener for mouse hover
    carouselWrapper.addEventListener('mouseleave', () => {
        startCarousel(); 
    });

    // reset start of transition, else break
    startCarousel();

    // bonus-- will i need this later? maybe GSAP has a library...
    // accessibility for buttons ie vimium
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
        stopCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
        stopCarousel();
    });
});