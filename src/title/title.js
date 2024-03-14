export function title() {
  const leftColumnWrapper = document.createElement('div');
  leftColumnWrapper.classList.add('left-column__wrapper');

  const leftColumnTitle = document.createElement('div');
  leftColumnTitle.classList.add('left-column__title');
  leftColumnTitle.id = 'typed-title';

  const h2Element = document.createElement('h2');
  h2Element.textContent = 'Hello World';
  const h1Element = document.createElement('h1');
  h1Element.innerHTML = `I'm Shaun MacWilliam, <br>and I'm a Web Developer`;
  leftColumnTitle.append(h2Element, h1Element);
  leftColumnWrapper.appendChild(leftColumnTitle);

  const typedSpan = document.createElement('span');
  typedSpan.id = 'typed';

  leftColumnWrapper.appendChild(typedSpan);

  return leftColumnWrapper;
}
