require('../css/app.scss');

const heroTemplate = require('../views/components/hero.pug');
const firstWorkTemplate = require('../views/components/works/first.pug');
const secondWorkTemplate = require('../views/components/works/second.pug');
const thirdWorkTemplate = require('../views/components/works/third.pug');

const main = document.body.querySelector('main');

main.insertAdjacentHTML('beforeend', heroTemplate());
main.insertAdjacentHTML('beforeend', firstWorkTemplate());
main.insertAdjacentHTML('beforeend', secondWorkTemplate());
main.insertAdjacentHTML('beforeend', thirdWorkTemplate());

main.addEventListener('wheel', (ev) => {
  main.scrollLeft += ev.deltaY;
});
