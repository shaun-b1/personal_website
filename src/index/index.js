import './reset.scss';
import './styles.scss';

import { title } from '../title/title';
import { nav } from '../nav/nav';
import { socialLinks } from '../social_links/social_links';
import { about } from '../about/about';
import { displayData } from '../display_data/display_data';
import { listTechnologies } from '../technologies/technologies';
import { background } from '../background/background';

const container = document.createElement('section');
container.classList.add('container');

const canvas = document.createElement('canvas');
canvas.id = 'background__canvas';

const leftColumn = document.createElement('header');
leftColumn.classList.add('left-column');
leftColumn.append(title(), nav(), socialLinks());

const rightColumn = document.createElement('main');
rightColumn.classList.add('right-column', 'right-column--hide');

async function renderData() {
  const dataElement = await displayData();
  rightColumn.append(about(), dataElement, listTechnologies());
  container.append(leftColumn, rightColumn, canvas);
  document.body.append(container);
  background();

  await new Promise((resolve) => {
    setTimeout(resolve, 0);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href="#${id}"]`);
        if (entry.isIntersecting) {
          navLink.classList.add('nav__link--active');
        } else {
          navLink.classList.remove('nav__link--active');
        }
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
}

setTimeout(() => {
  document
    .querySelector('.right-column')
    .classList.remove('right-column--hide');
}, 4000);

renderData();

console.log('Page initialized');
