import HTMLIcon from '../assets/images/Html5.svg';
import CSSIcon from '../assets/images/Css3 01 icon.svg';
import JSIcon from '../assets/images/Javascript Fill Icon.svg';
import npmIcon from '../assets/images/Npm.svg';
import yarnIcon from '../assets/images/Yarn icon.svg';
import webpackIcon from '../assets/images/Webpack SVG icon.svg';
import babelIcon from '../assets/images/Babel 16 icon.svg';
import jestIcon from '../assets/images/Jest.svg';
import sassIcon from '../assets/images/Sass SVG Repo.svg';
import nodeIcon from '../assets/images/Nodejs icon.svg';
import rubyIcon from '../assets/images/Ruby SVG icon.svg';
import gitIcon from '../assets/images/Git icon.svg';

export function listTechnologies() {
  const technologyData = [
    {
      name: 'HTML',
      icon: HTMLIcon,
    },
    {
      name: 'CSS',
      icon: CSSIcon,
    },
    {
      name: 'JavaScript',
      icon: JSIcon,
    },
    {
      name: 'NPM',
      icon: npmIcon,
    },
    {
      name: 'Yarn',
      icon: yarnIcon,
    },
    {
      name: 'Webpack',
      icon: webpackIcon,
    },
    {
      name: 'Babel',
      icon: babelIcon,
    },
    {
      name: 'Jest',
      icon: jestIcon,
    },
    {
      name: 'Sass',
      icon: sassIcon,
    },
    {
      name: 'NodeJS',
      icon: nodeIcon,
    },
    {
      name: 'Ruby on Rails',
      icon: rubyIcon,
    },
    {
      name: 'Git',
      icon: gitIcon,
    },
  ];

  const technologies = document.createElement('section');
  technologies.classList.add('right-column__technologies');
  technologies.id = 'technologies';
  technologies.setAttribute('aria-label', 'Technologies I have worked with');

  const technologiesTitle = document.createElement('h2');
  technologiesTitle.classList.add('technologies__title');
  technologiesTitle.textContent = 'Technologies';

  const technologiesSubtitle = document.createElement('p');
  technologiesSubtitle.classList.add('technologies__subtitle');
  technologiesSubtitle.textContent =
    'Below are just a few of the languages, frameworks, and tools that I have experience in:';

  const technologiesGrid = document.createElement('ul');
  technologiesGrid.classList.add('technologies__grid');

  technologyData.forEach((technology) => {
    const technologiesTile = document.createElement('li');
    technologiesTile.classList.add('grid__tile');

    const tileImage = document.createElement('img');
    tileImage.classList.add('tile__image');
    tileImage.src = technology.icon;
    tileImage.alt = `${technology.name} icon`;

    const tileText = document.createElement('p');
    tileText.classList.add('tile__text');
    tileText.textContent = technology.name;

    technologiesTile.append(tileImage, tileText);
    technologiesGrid.appendChild(technologiesTile);
  });

  technologies.append(
    technologiesTitle,
    technologiesSubtitle,
    technologiesGrid,
  );

  return technologies;
}
