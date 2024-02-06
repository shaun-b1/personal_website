export { title };

function title() {
  const title = document.createElement('h1');
  title.classList.add('left-column__title');
  title.innerHTML = `Hello World, <br>I'm Shaun MacWilliam, <br>and I'm a Web Developer`;

  return title;
}
