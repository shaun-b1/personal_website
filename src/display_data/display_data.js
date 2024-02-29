import '../assets/images/Arrow Up Right Icon.svg';
import { fetchData } from '../github_pins/github_pins';

export async function displayData() {
  const pins = document.createElement('section');
  pins.classList.add('right-column__pins');
  pins.id = 'projects';
  pins.setAttribute('aria-label', 'A selection of projects from my github');

  const pinsTitle = document.createElement('h2');
  pinsTitle.classList.add('pins__title');
  pinsTitle.textContent = 'Projects';

  const pinsList = document.createElement('ul');
  pinsList.classList.add('pins__list');

  pins.append(pinsTitle, pinsList);

  try {
    const data = await fetchData();
    console.log(data.user.pinnedItems.edges);
    data.user.pinnedItems.edges.forEach((edge) => {
      const { name, description, languages, openGraphImageUrl, deployments } =
        edge.node;

      const pin = document.createElement('li');
      pin.classList.add('list__pin');

      const pinImage = document.createElement('img');
      pinImage.classList.add('pin__image');
      pinImage.src = openGraphImageUrl;
      pinImage.alt = `${name} screenshot`;

      const pinContent = document.createElement('div');
      pinContent.classList.add('pin__content');

      const pinTitle = document.createElement('h3');
      pinTitle.classList.add('pin__title');

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

      pinTitle.appendChild(titleLink);

      const pinDescription = document.createElement('p');
      pinDescription.classList.add('pin__description');
      pinDescription.textContent = description;

      const pinLanguages = document.createElement('div');
      pinLanguages.classList.add('pin__languages');

      languages.nodes.forEach((language) => {
        const pinLanguage = document.createElement('p');
        pinLanguage.classList.add('pin__language');
        pinLanguage.textContent = language.name;
        pinLanguages.appendChild(pinLanguage);
      });

      pinContent.append(pinTitle, pinDescription, pinLanguages);

      pin.append(pinImage, pinContent);

      pinsList.appendChild(pin);
    });
  } catch (error) {
    console.error('Error displaying data:', error);
  }

  return pins;
}

function displayName(name) {
  const splitName = name.split('_');
  const capitalisedName = splitName.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalisedName.join(' ');
}
