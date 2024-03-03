export function about() {
  const about = document.createElement('section');
  about.classList.add('right-column__about');
  about.id = 'about';
  about.setAttribute('aria-label', 'About me section');

  const aboutTitle = document.createElement('h2');
  aboutTitle.classList.add('about__title');
  aboutTitle.textContent = 'About';

  about.appendChild(aboutTitle);

  const paragraphs = [
    "I first began building things on the internet when I was in school. Initially I would put together forums for my online gaming groups; a job that I would always volunteer for. I'd stay up late at night and wake up early before school to fix any little bugbear I could find.",
    "Since leaving school, I've gone on to complete a degree in Ancient History, excel as a professional athlete, and have had a successful career in event management. But I've never lost my passion for tinkering with technology. It wasn't until early 2019 that my tinkering would actually form the concept of a career, when a friend suggested  I could actually do this as a job. After a global pandemic and a move across the world, it feels time to make that concept a reality.",
    "I'm highly passionate about building beautiful pieces of software both externally and internally, things that will stand the test of time. I'm looking for a place of employment that will foster this passion, and enable me to take a confident first step into the world of web development.",
  ];

  paragraphs.forEach((paragraph) => {
    const aboutPara = document.createElement('p');
    aboutPara.classList.add('about__paragraph');
    aboutPara.textContent = paragraph;

    about.appendChild(aboutPara);
  });

  setTimeout(() => {
    const targetElement = document.querySelector('.left-column__title');
    const height = targetElement.offsetHeight;
    document.documentElement.style.setProperty(
      '--dynamic-height',
      height + 'px',
    );
  }, 5500);

  return about;
}
