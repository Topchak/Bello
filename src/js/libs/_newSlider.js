export function newSlider() {
  const sliderWrapper = document.querySelector('.newSlider__wrapper'),
    sliderItems = document.querySelectorAll('.newSlider__img'),
    sliderField = document.querySelector('.newSlider__inner'),
    prev = document.querySelector('.newSlider__prev-arrow'),
    next = document.querySelector('.newSlider__next-arrow'),
    current = document.querySelector('#current'),
    total = document.querySelector('#total'),
    width = window.getComputedStyle(sliderWrapper).width;
  let offset = 0,
    slideIndex = 1;

  sliderField.style.width = width * sliderItems.length;
  sliderField.classList.add('fade');
  sliderWrapper.style.overflow = 'hidden';

  sliderItems.forEach(element => {
    element.style.width = 600 + 'px';
  });

  if (sliderItems.length > 10) {
    total.textContent = `0${sliderItems.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = sliderItems.length;
    current.textContent = slideIndex;
  }

  function createCounter() {
    if (sliderItems.length > 10) {
      total.textContent = `0${sliderItems.length}`;
      current.textContent = `0${slideIndex}`;
    } else {
      total.textContent = sliderItems.length;
      current.textContent = slideIndex;
    }
  }
  createCounter();

  next.addEventListener('click', () => {
    if (offset == (parseInt(width) * (sliderItems.length - 1))) {
      offset = 0;
      slideIndex = 1;
    } else {
      offset += parseInt(width);
      slideIndex++;
    }
    createCounter();

    sliderField.style.transform = `translateX(-${offset}px)`;
  });

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = (parseInt(width) * (sliderItems.length - 1));
      slideIndex = sliderItems.length;
    } else {
      offset -= parseInt(width);
      slideIndex--;
    }

    createCounter();

    sliderField.style.transform = `translateX(-${offset}px)`;

  });

}