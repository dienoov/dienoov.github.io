require('../css/app.scss');

const heroTemplate = require('../views/components/hero.pug');
const firstWorkTemplate = require('../views/components/works/first.pug');
const secondWorkTemplate = require('../views/components/works/second.pug');
const thirdWorkTemplate = require('../views/components/works/third.pug');
const aboutTemplate = require('../views/components/about.pug');

const main = document.body.querySelector('main');

main.insertAdjacentHTML('beforeend', heroTemplate());
main.insertAdjacentHTML('beforeend', firstWorkTemplate());
main.insertAdjacentHTML('beforeend', secondWorkTemplate());
main.insertAdjacentHTML('beforeend', thirdWorkTemplate());
main.insertAdjacentHTML('beforeend', aboutTemplate());

const horizontalScroll = (ev) => {
  main.scrollLeft += ev.deltaY;
};
const resetScroll = () => {
  window.scrollTo(0, 0);
  main.scrollTo(0, 0);
};

const LANDSCAPE = 0;
const PORTRAIT = 1;
let orientation;

if (window.screen.availHeight < window.screen.availWidth) {
  orientation = LANDSCAPE;
  main.addEventListener('wheel', horizontalScroll);
}

window.addEventListener('resize', () => {
  if (window.screen.availHeight < window.screen.availWidth && orientation === PORTRAIT) {
    orientation = LANDSCAPE;
    resetScroll();
    main.addEventListener('wheel', horizontalScroll);
  } else if (window.screen.availHeight > window.screen.availWidth && orientation === LANDSCAPE) {
    orientation = PORTRAIT;
    resetScroll();
    main.removeEventListener('wheel', horizontalScroll);
  }
});
