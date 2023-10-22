import {
  modalClose,
  modalOpen
} from './_modal';

import {
  postData
} from '../services/_services';

export default function forms(formSelector) {
  const forms = document.querySelectorAll(formSelector);
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  forms.forEach(form => {
    bindPostData(form);
  });
  


  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formInputs = document.querySelectorAll('.modal__input');
      console.log(formInputs);

      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
      text-align: center;
      display: block;
      margin: 0 auto;
      max-width: 50px;
      `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/requests', json)
        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        }).catch(() => {
          showThanksModal(message.failure);
        }).finally(() => {
          form.reset();
        });


      function showThanksModal(message) {
        const mainModal = document.querySelector('.modal__dialog');
        mainModal.classList.add('hide');
        modalOpen();

        const infoModal = document.createElement('div');
        infoModal.classList.add('modal__dialog');

        infoModal.innerHTML = `
        <div class="modal__close" data-close>×</div>
        <div class="modal__content">${message}</div>
        `;

        document.querySelector('.modal').append(infoModal);

        setTimeout(() => {
          infoModal.remove();
          mainModal.classList.add('show');
          mainModal.classList.remove('hide');
          modalClose();
        }, 4000);
      }

    });
  }
}
