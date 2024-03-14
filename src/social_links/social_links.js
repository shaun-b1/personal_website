import '../assets/images/GitHub SVGRepo.svg';
import '../assets/images/LinkedIn brand icon.png';
import '../assets/images/Instagram brand icon.png';

export function socialLinks() {
  const socials = document.createElement('section');
  socials.classList.add(
    'left-column__social-links',
    'left-column__social-links--hide',
  );

  const socialsList = document.createElement('ul');
  socialsList.classList.add('social-links__list');

  socials.appendChild(socialsList);

  const socialData = [
    {
      name: 'GitHub',
      url: 'https://github.com/shaun-b1',
      icon: '../assets/images/Github SVGRepo.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shaun-macwilliam/',
      icon: '../assets/images/Linkedin brand icon.png',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shauny_b1/',
      icon: '../assets/images/Instagram brand icon.png',
    },
  ];

  socialData.forEach((social) => {
    const socialsListItem = document.createElement('li');
    socialsListItem.classList.add('social__item');

    const socialLink = document.createElement('a');
    socialLink.classList.add('social__link');
    socialLink.href = social.url;
    socialLink.target = '_blank';
    socialLink.setAttribute(
      'aria-label',
      `My ${social.name} (opens in a new tab)`,
    );

    const socialImage = document.createElement('img');
    socialImage.classList.add('social__icon');
    socialImage.src = social.icon;
    socialImage.alt = `${social.name} icon`;

    socialLink.appendChild(socialImage);

    socialsListItem.appendChild(socialLink);

    socialsList.appendChild(socialsListItem);
  });

  setTimeout(() => {
    document
      .querySelector('.left-column__social-links')
      .classList.remove('left-column__social-links--hide');
  }, 5000);

  return socials;
}
