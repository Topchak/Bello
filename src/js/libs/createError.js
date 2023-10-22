export default function createError(input, reg) {

  const message = document.createElement('div');
  message.classList.add('error-text');
  message.textContent = '';
  input.insertAdjacentElement('afterend', message);

  input.addEventListener('input', () => {
    if (input.value && !reg.test(input.value)) {
      input.style.boxShadow = '0 0 5px red';
      message.textContent = 'Please enter correct data';
      return false;
    } else {
      input.style.boxShadow = '';
      message.textContent = '';
      return true;

    }
  });


}