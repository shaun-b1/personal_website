export { title };

function title() {
  const head = document.createElement('header');
  head.classList.add('left-column__head');

  const element = document.createElement('h1');
  element.classList.add('head__title');
  head.appendChild(element);

  return head;
}
