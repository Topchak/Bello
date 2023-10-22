export function slider() {
  const next = document.querySelector('.mySlider__next-arrow'),
    prev = document.querySelector('.mySlider__prev-arrow'),
    sliderWrapper = document.querySelector('.mySlider__wrapper'),
    sliderInner = document.querySelector('.mySlider__inner'),
    sliderItems = document.querySelectorAll('.mySlider__img');
  let count = 1;

  sliderWrapper.style.overflow = 'hidden';
  sliderInner.style.width = parseInt(sliderItems[0].width * sliderItems.length) + 'px';
  sliderItems.forEach(item => {
    item.classList.add('hide');
  });

  hideItem();

  function hideItem() {
    sliderItems[count].classList.add('show', 'fade');
    sliderItems[count].classList.remove('hide');
  }

  next.addEventListener('click', () => {
    if (count === sliderItems.length - 1) {
      count = 1;
    } else {
      count += 1;
    }
    sliderItems.forEach(item => {
      item.classList.add('hide');
    });
    hideItem();

  });

  prev.addEventListener('click', () => {
    if (count === 1) {
      count = sliderItems.length - 1;
    } else {
      count -= 1;
    }
    sliderItems.forEach(item => {
      item.classList.add('hide');
    });
    hideItem();
  });




}