import createError from './createError';

export default function checkInputs() {
  const formInputs = document.querySelectorAll('.modal__input');


  formInputs.forEach(input => {
    if (input.getAttribute('name') === 'name') {
      const regName = /^[A-Za-zА-Яа-я\s]+$/;
      createError(input, regName);
    } else if (input.getAttribute('name') === 'phone') {
      const regDig = /^[\d\s+/-]+$/;
      createError(input, regDig);

    }
  });

  // formInputs.forEach(input => {
  //   const regName = /^[A-Za-zА-Яа-я\s]+$/;
  //   const regDig = /^[0-9\s+/-]+$/;
  //   createError('name', input, regName);

  //   createError('phone', input, regDig);
  // });
}