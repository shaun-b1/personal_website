import './reset.scss';
import './styles.scss';

import { title } from '../title/title';
import { nav } from '../nav/nav';
import { socialLinks } from '../social_links/social_links';
import { about } from '../about/about';
import { displayData } from '../github_pins/github_pins';

const container = document.createElement('div');
container.classList.add('container');

const leftColumn = document.createElement('header');
leftColumn.classList.add('left-column');
leftColumn.append(title(), nav(), socialLinks());

const rightColumn = document.createElement('main');
rightColumn.classList.add('right-column', 'right-column--hide');

async function renderData() {
  const dataElement = await displayData();
  rightColumn.append(about(), dataElement);
  container.append(leftColumn, rightColumn);
  document.body.append(container);

  await new Promise((resolve) => {
    setTimeout(resolve, 0);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const itemLink = document.querySelector(`.item__link[href="#${id}"]`);
        if (entry.isIntersecting) {
          itemLink.classList.add('item__link--active');
        } else {
          itemLink.classList.remove('item__link--active');
        }
      });
    },
    { threshold: 0.35 },
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
