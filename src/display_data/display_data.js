import '../assets/images/Arrow Up Right Icon.svg';
import { fetchData } from '../github_pins/github_pins';

export async function displayData() {
  const projects = document.createElement('section');
  projects.classList.add('right-column__projects');
  projects.id = 'projects';
  projects.setAttribute('aria-label', 'A selection of projects from my github');

  const projectsTitle = document.createElement('h2');
  projectsTitle.classList.add('projects__title');
  projectsTitle.textContent = 'Projects';

  const projectsList = document.createElement('ul');
  projectsList.classList.add('projects__list');

  projects.appendChild(projectsTitle);

  try {
    const projectsList = document.createElement('ul');
    projectsList.classList.add('projects__list');

    const data = await fetchData();
    data.user.pinnedItems.edges.forEach((edge) => {
      const { name, description, languages, openGraphImageUrl, deployments } =
        edge.node;

      const projectCard = document.createElement('li');
      projectCard.classList.add('project__card');

      const cardImage = document.createElement('img');
      cardImage.classList.add('card__image');
      cardImage.src = openGraphImageUrl;
      cardImage.alt = `${name} screenshot`;

      const cardContent = document.createElement('div');
      cardContent.classList.add('card__content');

      const contentTitle = document.createElement('h3');
      contentTitle.classList.add('content__title');

      const titleLink = document.createElement('a');
      titleLink.classList.add('title__link');
      titleLink.textContent = displayName(name);
      titleLink.href = deployments.nodes[0].latestStatus.environmentUrl;
      titleLink.target = '_blank';
      titleLink.setAttribute(
        'aria-label',
        `${displayName(name)} (opens in a new tab)`,
      );

      const arrow = document.createElement('img');
      arrow.src = '../assets/images/Arrow Up Right Icon.svg';
      arrow.classList.add('link__arrow');
      arrow.setAttribute('aria-hidden', 'true');

      titleLink.appendChild(arrow);

      contentTitle.appendChild(titleLink);

      const contentDescription = document.createElement('p');
      contentDescription.classList.add('content__description');
      contentDescription.textContent = description;

      const contentLanguages = document.createElement('ul');
      contentLanguages.classList.add('content__languages');

      languages.nodes.forEach((language) => {
        const languageItem = document.createElement('li');
        languageItem.classList.add('languages__item');
        languageItem.textContent = language.name;
        contentLanguages.appendChild(languageItem);
      });

      cardContent.append(contentTitle, contentDescription, contentLanguages);

      projectCard.append(cardImage, cardContent);

      projectsList.appendChild(projectCard);
    });

    projects.appendChild(projectsList);
    return projects;
  } catch (error) {
    projects.classList.add('right-column__projects--error');

    const errorElement = document.createElement('p');
    errorElement.classList.add('projects__error');
    errorElement.innerHTML = `Oh no, something has gone wrong! If you can see this, my GraphQL query has failed. Please <a href="mailto:shaun.macwilliam@icloud.com?subject=Your%20GraphQL%20query%20is%20down!">ping me a message</a>, and I'll fix it!`;

    projects.appendChild(errorElement);
    return projects;
  }
}

function displayName(name) {
  const splitName = name.split('_');
  const capitalisedName = splitName.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalisedName.join(' ');
}
