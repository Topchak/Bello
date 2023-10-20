export default function heroAnimation() {
  const hero = document.querySelector('.hero');
  const heroContent = hero.querySelector('.hero__content');

  if (localStorage.getItem('hero_anim_complated') !== 'true') {
    hero.classList.add('animated');
    localStorage.setItem('hero_anim_complated', 'true');

    hero.animate([{
        left: '-80%',
        opacity: '0.2'
      },
      {
        left: '-50%',
        opacity: '0.5'
      },
      {
        left: '0',
        opacity: '1',

      }
    ], {
      duration: 1600,
      iterations: 1,
      easing: 'ease-in-out',
    });

    heroContent.animate([{
        left: '-80%',
        opacity: '0.2'
      },
      {
        left: '-50%',
        opacity: '0.5'
      },
      {
        left: '0',
        opacity: '1',

      }
    ], {
      duration: 1900,
      iterations: 1,
      easing: 'ease-in-out',
    });


  }

}