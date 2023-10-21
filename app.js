document.addEventListener("DOMContentLoaded", function() {
    
    let hamburger = document.querySelector('.hamberger-button');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    let navLinks = document.querySelectorAll('.click, .click-1, .click-2, .click-3, .click-4');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            mobileNav.classList.add('open');
        });
    }

    if (times) {
        times.addEventListener('click', function() {
            mobileNav.classList.remove('open');
        });
    }

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('open');
        });
    });
});