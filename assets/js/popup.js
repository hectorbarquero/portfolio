// this program handles a popup overlay for important call ups.

document.getElementById('open-popup').addEventListener('click', function(event) {
    event.preventDefault();
    
    var popup = document.getElementById('privacy-popup');
    var overlay = document.getElementById('popup-overlay');
    
    popup.style.display = 'block';
    overlay.style.display = 'block';
    // prevent scrolling of .content behind the pop up
    document.body.style.overflow = 'hidden';
});

document.getElementById('popup-close').addEventListener('click', function() {
    var popup = document.getElementById('privacy-popup');
    var overlay = document.getElementById('popup-overlay');
    
    popup.style.display = 'none';
    overlay.style.display = 'none';
    //restore scroll of body once popup is gone. otherwise, above ln 11 stays
    document.body.style.overflow = '';
});

document.getElementById('popup-overlay').addEventListener('click', function() {
    var popup = document.getElementById('privacy-popup');
    var overlay = document.getElementById('popup-overlay');
    
    popup.style.display = 'none';
    overlay.style.display = 'none';
    //restore scroll of body once popup is gone. otherwise, above ln 11 stays
    document.body.style.overflow = ''; 
});