import createError from './_createError';

export default function checkInputs() {
  const formInputs = document.querySelectorAll('.modal__input');
  const footerInput = document.querySelector('.input');


  formInputs.forEach(input => {
    if (input.getAttribute('name') === 'name') {
      const regName = /^[A-Za-zА-Яа-я\s]+$/;
      createError(input, regName);

    } else if (input.getAttribute('name') === 'phone') {
      const regDig = /^[\d\s+/-]+$/;
      createError(input, regDig);

    } 

  });

  footerInput.addEventListener('input', ()=>{
    const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (footerInput.value && !regEmail.test(footerInput.value)) {
      footerInput.style.boxShadow = '0 0 5px red';
    } else {
      footerInput.style.boxShadow = '';
    }
  });

}