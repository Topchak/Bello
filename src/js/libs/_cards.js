import {
  getResource
} from '../services/_services';

export default function cards() {
  class Card {
    constructor(title, text, link, parentSelector, ...classes) {
      this.title = title;
      this.text = text;
      this.link = link;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.classes = 'selector-cards__item';
        element.classList.add(this.classes);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }
      element.innerHTML = `
      <p class="selector-cards__title">${this.title}</p>
      <p class="selector-cards__text">${this.text}</p>
      <a href="#" class="selector-cards__link">${this.link} <span><img
            src="./img/svg/blue-arrow-right.svg"></span> </a>
      `;
      this.parent.append(element);
    }
  }

  getResource('http://localhost:3000/menu')
    .then(data => {
      data.forEach(({
        title,
        text,
        link
      }) => {
        new Card(title, text, link, '.selector-cards__wrapper').render();
      });
    });
}