export { title };

function title() {
  const head = document.createElement('header');
  head.classList.add('left-column__head');

  const elements = [
    { tag: 'h2', class: 'head__subtitle', text: 'Hello World,' },
    { tag: 'h1', class: 'head__title', text: `I'm Shaun MacWilliam,` },
    { tag: 'h2', class: 'head__introduction', text: "and I'm a Web Developer" },
  ];

  elements.forEach(({ tag, class: className, text }) => {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.textContent = text;
    head.appendChild(element);
  });

  return head;
}
