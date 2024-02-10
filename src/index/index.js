import './reset.scss';
import './styles.scss';

import { title } from '../title/title';
import { nav } from '../nav/nav';
import { socialLinks } from '../social_links/social_links';
import { about } from '../about/about';

const container = document.createElement('main');

const leftColumn = document.createElement('div');
leftColumn.classList.add('left-column');
leftColumn.append(title(), nav(), socialLinks());

const rightColumn = document.createElement('div');
rightColumn.classList.add('right-column', 'right-column--hide');
rightColumn.appendChild(about());

setTimeout(() => {
  document
    .querySelector('.right-column')
    .classList.remove('right-column--hide');
}, 4000);

container.append(leftColumn, rightColumn);

document.body.append(container);

console.log('Page initialized');
