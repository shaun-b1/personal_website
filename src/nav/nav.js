export { nav };

function nav() {
  const nav = document.createElement('nav');
  nav.classList.add('left-column__nav');

  const ul = document.createElement('ul');
  ul.classList.add('nav__list');

  const nav_array = ['About', 'Projects', 'Technologies'];

  nav_array.forEach((label) => {
    const li = document.createElement('li');
    li.classList.add('list__item');
    const button = document.createElement('button');
    button.classList.add('item__button');
    button.textContent = label;
    li.appendChild(button);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  return nav;
}
