export function nav() {
  const nav = document.createElement('nav');
  nav.classList.add('left-column__nav', 'left-column__nav--hide');

  const ul = document.createElement('ul');
  ul.classList.add('nav__list');

  const nav_array = ['About', 'Projects', 'Technologies'];
  const hrefs = ['#about', '#projects', '#technologies'];

  nav_array.forEach((label, index) => {
    const li = document.createElement('li');
    li.classList.add('list__item');
    const link = document.createElement('a');
    link.classList.add('item__link');
    link.textContent = label;
    link.setAttribute('href', hrefs[index]);
    li.appendChild(link);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

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
