export function title() {
  const head = document.createElement('div');
  head.classList.add('left-column__header');

  const element = document.createElement('h1');
  element.classList.add('header__title');
  head.appendChild(element);

  return head;
}
