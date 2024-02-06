export { socialLinks };

import '../assets/images/GitHub SVGRepo.svg';
import '../assets/images/LinkedIn brand icon.png';
import '../assets/images/Instagram brand icon.png';

function socialLinks() {
  const socials = document.createElement('div');
  socials.classList.add('left-column__social-links');

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
    const link = document.createElement('a');
    link.classList.add('social-link');
    link.href = social.url;
    link.target = '_blank';

    const img = document.createElement('img');
    img.classList.add('social-link__icon');
    img.src = social.icon;
    img.alt = `${social.name} icon`;

    link.appendChild(img);

    socials.appendChild(link);
  });

  return socials;
}
