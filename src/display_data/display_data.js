import { fetchData } from '../github_pins/github_pins';

export async function displayData() {
  const pins = document.createElement('section');
  pins.classList.add('right-column__pins');
  pins.id = 'projects';

  try {
    const data = await fetchData();
    console.log(data.user.pinnedItems.edges);
    data.user.pinnedItems.edges.forEach((edge) => {
      const { name, description, languages, openGraphImageUrl, deployments } =
        edge.node;

      const pin = document.createElement('div');
      pin.classList.add('pins__pin');

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

      // const pinLiveUrl = document.createElement('a');
      // pinLiveUrl.classList.add('pin__live-url');
      // pinLiveUrl.href = deployments.nodes[0].latestStatus.environmentUrl;
      // pinLiveUrl.target = '_blank';
      // pinLiveUrl.textContent = 'See it live';

      pinContent.append(pinTitle, pinDescription, pinLanguages);

      pin.append(pinImage, pinContent);

      pins.appendChild(pin);
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
