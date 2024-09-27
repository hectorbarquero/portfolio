// the purpose of this script is to help debug issues with display, since this site was build desktop first and then i added mobile and small screens
// ill use this to check the output in console against the media query, and know which i need to debug easily.

document.addEventListener('DOMContentLoaded', function() {
    function checkMediaQuery() {
        const width = window.innerWidth;
        console.log(`Window width: ${width}px`);

        if (width <= 1315) {
            console.log("Media query: selected for small devices and mobile, switch to column grid - less than 1315px");
        } else if (width > 1315 && width <= 1699) {
            console.log("Media query: selected for tablets and laptops, portrait 1316px to 1699px");
        } else {
            console.log("Media query: selected for monitors large - starts at 1700px");
        }
    }

    window.addEventListener('resize', checkMediaQuery);
    checkMediaQuery()
});