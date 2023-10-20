function modalOpen() {
  const modal = document.querySelector('.modal');

  modal.classList.remove('hide');
  modal.classList.add('show');
  modal.classList.add('fade');
  document.body.style.overflow = 'hidden';

}

function modalClose() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('show', 'fade');
  modal.classList.add('hide');
  document.body.style.overflow = '';

}


function modalGetPrice() {
  const modal = document.querySelector('.modal');
  const btnsModal = document.querySelectorAll('[data-getPrice]');

  btnsModal.forEach(btn => {
    btn.addEventListener('click', () => {
      modalOpen();
    });
  });


  function showModalByScroll() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 10) {
      modalOpen();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  modal.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains('modal__close')) {
      modalClose();
    }
  });

  window.addEventListener('click', (e) => {
    const target = e.target;
    if (target === modal) {
      modalClose();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape' && modal.classList.contains('show')) {
      modal.classList.remove('show', 'fade');
      modal.classList.add('hide');
    }
  });


  window.addEventListener('scroll', showModalByScroll);

}

export {
  modalGetPrice,
  modalOpen,
  modalClose,
};
