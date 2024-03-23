import './reset.scss';
import './styles.scss';

import { title } from '../title/title';
import { nav } from '../nav/nav';
import { socialLinks } from '../social_links/social_links';
import { about } from '../about/about';
import { displayData } from '../display_data/display_data';
import { listTechnologies } from '../technologies/technologies';
import { contact } from '../contact/contact';
import { background } from '../background/background';
import Typed from 'typed.js';

async function renderData() {
  try {
    const projects = await displayData();

    const container = document.createElement('div');
    container.classList.add('container');

    const canvas = document.createElement('canvas');
    canvas.id = 'background__canvas';

    const leftColumn = document.createElement('header');
    leftColumn.classList.add('left-column');
    leftColumn.append(title(), nav(), socialLinks());

    const rightColumn = document.createElement('main');
    rightColumn.classList.add('right-column', 'right-column--hide');
    rightColumn.append(about(), projects, listTechnologies(), contact());

    container.append(leftColumn, rightColumn, canvas);
    document.body.append(container);

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
      { threshold: 0.45 },
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
  } catch (error) {
    console.error('Error rendering data:', error);
  } finally {
    setTimeout(() => {
      document
        .querySelector('.right-column')
        .classList.remove('right-column--hide');
      background();
    }, 5000);

    let isFirstString = true;

    new Typed('#typed', {
      stringsElement: '#typed-title',
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      preStringTyped: () => {
        if (isFirstString) {
          // Customize styles for the first string
          const strings = document.querySelector('#typed');
          const cursor = document.querySelector('.typed-cursor');
          strings.style.color = 'rgb(40, 254, 20)';
          strings.style.backgroundColor = 'rgb(0, 0, 0)';
          cursor.style.color = 'rgb(40, 254, 20)';
          cursor.style.backgroundColor = 'rgb(0, 0, 0)';
          isFirstString = false; // Set flag to false after customizing the first string
        } else {
          const strings = document.querySelector('#typed');
          const cursor = document.querySelector('.typed-cursor');
          strings.style.color = '';
          strings.style.backgroundColor = '';
          cursor.style.color = '';
          cursor.style.backgroundColor = '';
        }
      },
    });
  }
  console.log('Page initialized');

  if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }
}

renderData();
