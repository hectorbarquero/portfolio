document.addEventListener('DOMContentLoaded', function() {
    function adjustPadding() {
        const leftPane = document.querySelector('.left-pane');
        const width = window.innerWidth;
        console.log(`Window width: ${width}px`);
        console.log("Adjusting padding");
        if (width <= 600) {
            console.log("Padding set to neg 10 rem")
            leftPane.style.padding = '-10rem';
        } else if (width > 600 && width <= 900) {
            console.log("Padding set to neg 5 rem")
            leftPane.style.padding = '-5rem';
        } else {
            console.log("Padding set to 1 rem")
            leftPane.style.padding = '1rem';
        }
    }

    window.addEventListener('resize', adjustPadding);
    adjustPadding();
});
