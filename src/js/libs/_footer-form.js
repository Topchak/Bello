export default function footerForm() {
  const form = document.querySelector('.footer__form-form');
  const input = form.querySelector('.input');

  form.addEventListener('click', () => {
    console.log(input.value);
  });
}







const getPriceBtns = document.querySelectorAll('[data-getPrice]');
const modalPrice = document.querySelector('.modal-price');

function modalOpen() {
  modalPrice.classList.add('show', 'fade');
  modalPrice.classList.remove('hide');
  document.body.classList.add('overflow');

  modalPrice.style.top = '50%';
  modalPrice.style.left = '50%';
  modalPrice.style.transform = 'translate(-50%, -50%)';
}

function modalClose(e) {
  const target = e.target;
  if (target && target.classList.contains('modal-price-close')) {
    modalPrice.classList.remove('show', 'fade');
    modalPrice.classList.add('hide');

    document.body.classList.remove('overflow');
  }
}

document.addEventListener('keydown', (event) => {
  if (event.code == 'Escape' && modalPrice.classList.contains('show')) {
    modalPrice.classList.remove('show', 'fade');
    modalPrice.classList.add('hide');
  }
});


modalPrice.addEventListener('click', (e) => {
  modalClose(e);
});

getPriceBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    modalOpen();
  });
});