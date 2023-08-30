
export default function burger() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu-burger');
  const menuItems = document.querySelectorAll('.menu-burger__item');

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('active');
    menu.classList.toggle('none')
  });

  menuItems.forEach(element => {
    element.addEventListener('click', () => {
      
      burger.classList.remove('open');
      menu.classList.remove('active');
      menu.classList.add('none');

    });
  });
}