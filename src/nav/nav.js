export { nav };

function nav() {
  const nav = document.createElement('ul');

  const nav_array = ['About', 'Projects', 'Technologies'];

  nav_array.forEach((label) => {
    const nav_li = document.createElement('li');
    const nav_button = document.createElement('button');
    nav_button.textContent = label;
    nav_li.appendChild(nav_button);
    nav.appendChild(nav_li);
  });

  return nav;
}
