import '../assets/images/Html5.svg';
import '../assets/images/Css3 01 icon.svg';
import '../assets/images/Javascript Fill Icon.svg';
import '../assets/images/Npm.svg';
import '../assets/images/Yarn icon.svg';
import '../assets/images/Webpack SVG icon.svg';
import '../assets/images/Babel 16 icon.svg';
import '../assets/images/Jest.svg';
import '../assets/images/Sass SVG Repo.svg';
import '../assets/images/Nodejs icon.svg';
import '../assets/images/Ruby SVG icon.svg';

export function listTechnologies() {
  const technologyData = [
    {
      name: 'HTML',
      icon: '../assets/images/Html5.svg',
    },
    {
      name: 'CSS',
      icon: '../assets/images/Css3 01 icon.svg',
    },
    {
      name: 'JavaScript',
      icon: '../assets/images/Javascript Fill Icon.svg',
    },
    {
      name: 'NPM',
      icon: '../assets/images/Npm.svg',
    },
    {
      name: 'Yarn',
      icon: '../assets/images/Yarn icon.svg',
    },
    {
      name: 'Webpack',
      icon: '../assets/images/Webpack SVG icon.svg',
    },
    {
      name: 'Babel',
      icon: '../assets/images/Babel 16 icon.svg',
    },
    {
      name: 'Jest',
      icon: '../assets/images/Jest.svg',
    },
    {
      name: 'Sass',
      icon: '../assets/images/Sass SVG Repo.svg',
    },
    {
      name: 'NodeJS',
      icon: '../assets/images/Nodejs icon.svg',
    },
    {
      name: 'Ruby on Rails',
      icon: '../assets/images/Ruby SVG icon.svg',
    },
  ];

  const technologies = document.createElement('section');
  technologies.classList.add('right-column__technologies');
  technologies.id = 'technologies';

  const technologiesTitle = document.createElement('h3');
  technologiesTitle.classList.add('technologies__title');
  technologiesTitle.textContent =
    'Below are just a few of the languages, frameworks, and tools that I have experience in:';

  const technologiesGrid = document.createElement('div');
  technologiesGrid.classList.add('technologies__grid');

  technologyData.forEach((technology) => {
    const technologiesTile = document.createElement('div');
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

  technologies.append(technologiesTitle, technologiesGrid);

  return technologies;
}
