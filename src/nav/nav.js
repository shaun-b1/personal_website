export function nav() {
  const nav = document.createElement('nav');
  nav.classList.add('left-column__nav', 'left-column__nav--hide');

  const navList = document.createElement('ul');
  navList.classList.add('nav__list');

  const nav_array = ['About', 'Projects', 'Technologies'];
  const hrefs = ['#about', '#projects', '#technologies'];

  nav_array.forEach((label, index) => {
    const navItem = document.createElement('li');
    navItem.classList.add('nav__item');
    const navLink = document.createElement('a');
    navLink.classList.add('nav__link');
    navLink.textContent = label;
    navLink.setAttribute('href', hrefs[index]);
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  });

  nav.appendChild(navList);

  setTimeout(() => {
    document
      .querySelector('.left-column__nav')
      .classList.remove('left-column__nav--hide');
  }, 4000);

  return nav;
}

window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`a[href]="#${id}"]`).classList.add('active');
      } else {
        document.querySelector(`a[href]="#${id}"]`).classList.remove('active');
      }
    });
  });
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
});
