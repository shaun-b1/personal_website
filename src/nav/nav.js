export { nav };

function nav() {
  const nav = document.createElement('nav');

  const ul = document.createElement('ul');

  const nav_array = ['About', 'Projects', 'Technologies'];

  nav_array.forEach((label) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = label;
    li.appendChild(button);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  return nav;
}
