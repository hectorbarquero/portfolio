document.getElementById('open-popup').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Show the popup and overlay
    var popup = document.getElementById('privacy-popup');
    var overlay = document.getElementById('popup-overlay');
    
    popup.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling of body content
});

document.getElementById('popup-close').addEventListener('click', function() {
    var popup = document.getElementById('privacy-popup');
    var overlay = document.getElementById('popup-overlay');
    
    popup.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling of body content
});

document.getElementById('popup-overlay').addEventListener('click', function() {
    var popup = document.getElementById('privacy-popup');
    var overlay = document.getElementById('popup-overlay');
    
    popup.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling of body content
});