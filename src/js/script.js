'use strict';

import burger from './libs/_hamburger';
import heroAnimation from './libs/_hero-animations';
import forms from './libs/forms';
import {
  modalGetPrice
} from './libs/_modal';
import checkInputs from './libs/_inputs';


window.addEventListener('DOMContentLoaded', () => {

  burger();
  heroAnimation();
  forms('form');
  modalGetPrice();
  checkInputs();

});