const hamburger = document.querySelector('.bars');
const navMenu = document.querySelector('nav');
const closeIcon = document.querySelector('.xicon');
const links = document.querySelectorAll('.links');

hamburger.addEventListener('click', () => {
    hamburger.classList.remove('bars');
    navMenu.classList.add('active');
    closeIcon.classList.add('show');
});

closeIcon.addEventListener('click', () => {
    closeIcon.classList.remove('show');
    navMenu.classList.remove('active');
    hamburger.classList.add('bars');
  });
  
  links.forEach((n) => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
    closeIcon.classList.remove('show');
    hamburger.classList.add('bars');
  }));
  