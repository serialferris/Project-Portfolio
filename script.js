const hamburger = document.querySelector('.bars');
const navMenu = document.querySelector('nav');
const closeIcon = document.querySelector('.xicon');
const links = document.querySelectorAll('.links');

hamburger.addEventListener('click', () => {
    hamburger.classList.remove('bars');
    navMenu.classList.add('active');
    closeIcon.classList.add('show');
});
