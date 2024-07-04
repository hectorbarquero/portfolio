document.addEventListener('DOMContentLoaded', function() {
    const loaders = document.querySelectorAll('.loader');
    let rotationCount = 0;

    function rotateLoaders() {
        rotationCount++;
        
        if (rotationCount > 3) {
            fadeOutWelcomeAnimation();
        } else {
            setTimeout(rotateLoaders, 1000);
        }
    }

    rotateLoaders();

    function fadeOutWelcomeAnimation() {
        const welcomeAnimation = document.getElementById('welcome-animation');
        if (welcomeAnimation) {
            welcomeAnimation.style.transition = 'opacity 2s ease';
            welcomeAnimation.style.opacity = '0';
            
            // redirect once hydration = ready
            setTimeout(function() {
                window.location.href = 'home/welcome/index.html';
            }, 2000);
        } else {
            console.error('#welcome-animation element not found!');
        }
    }
});