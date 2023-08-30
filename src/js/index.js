'use strict';

const hamburger = document.querySelector('.hamburger');
const menuHamburger = document.querySelector('.menu-hamburger');
const menuHamburgerItem = document.querySelectorAll('.menu-hamburger__item');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menuHamburger.classList.toggle('active');
  menuHamburger.classList.toggle('none')
});

menuHamburgerItem.forEach(element => {
  element.addEventListener('click', () => {
    if (hamburger.classList.contains('open') && menuHamburger.classList.contains('active')) {

      hamburger.classList.remove('open');
      menuHamburger.classList.remove('active');
      menuHamburger.classList.add('none');
    }
  });
});