export { socialLinks };

function socialLinks() {
  const socials = document.createElement('div');

  const socialData = [
    { name: 'GitHub', url: 'https://github.com/shaun-b1', icon: '' },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shaun-macwilliam/',
      icon: '',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shauny_b1/',
      icon: '',
    },
  ];

  socialData.forEach((social) => {
    const link = document.createElement('a');
    link.href = social.url;
    link.target = '_blank';

    const img = document.createElement('img');
    img.src = social.icon;
    img.alt = `${social.name} icon`;

    link.appendChild(img);

    socials.appendChild(link);
  });

  return socials;
}
