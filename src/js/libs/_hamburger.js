
export default function burger() {
  const hamburger = document.querySelector('.hamburger');
  const menuHamburger = document.querySelector('.menu-hamburger');
  const menuHamburgerItems = document.querySelectorAll('.menu-hamburger__item');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menuHamburger.classList.toggle('active');
    menuHamburger.classList.toggle('none')
  });

  menuHamburgerItems.forEach(element => {
    element.addEventListener('click', () => {
      
      hamburger.classList.remove('open');
      menuHamburger.classList.remove('active');
      menuHamburger.classList.add('none');

    });
  });
}