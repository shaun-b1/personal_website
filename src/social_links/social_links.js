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
    const linkList = document.createElement('li');
    linkList.classList.add('socials__list-item');

    const link = document.createElement('a');
    link.classList.add('social-link');
    link.href = social.url;
    link.target = '_blank';
    link.setAttribute('aria-label', `My ${social.name} (opens in a new tab)`);

    const img = document.createElement('img');
    img.classList.add('social-link__icon');
    img.src = social.icon;
    img.alt = `${social.name} icon`;

    link.appendChild(img);

    linkList.appendChild(link);

    socialsList.appendChild(linkList);
  });

  setTimeout(() => {
    document
      .querySelector('.left-column__social-links')
      .classList.remove('left-column__social-links--hide');
  }, 4000);

  return socials;
}
