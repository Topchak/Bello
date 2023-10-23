'use strict';

import burger from './libs/_hamburger';
import heroAnimation from './libs/_hero-animations';
import forms from './libs/forms';
import {
  modalGetPrice
} from './libs/_modal';
import checkInputs from './libs/_inputs';
import cards from './libs/_cards';
import {slider} from './libs/_slider';
import {
  newSlider
} from './libs/_newSlider';


window.addEventListener('DOMContentLoaded', () => {

  burger();
  heroAnimation();
  forms('form');
  modalGetPrice();
  checkInputs();
  cards();
  slider();
  newSlider();
});