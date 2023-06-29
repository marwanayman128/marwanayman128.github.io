let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
    }

    prevScrollPos = currentScrollPos;
});