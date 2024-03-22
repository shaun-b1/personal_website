export function contact() {
  const contactSection = document.createElement('section');
  contactSection.classList.add('right-column__contact');
  contactSection.setAttribute('aria-label', 'Contact me section');

  const contactText = document.createElement('p');
  contactText.innerHTML = `Loosely designed in <a href="https://www.canva.com/" target="_blank" aria_label="Canva.com (opens in a new tab)">Canva</a>, and coded in <a href="https://code.visualstudio.com/" target="_blank" aria_label="Visual Studio Code website (opens in a new tab)">Visual Studio Code</a>. If you'd like to reach out, <a href="mailto:shaun.macwilliam@icloud.com" aria_label="Opens an email to shaun.macwilliam@icloud.com">drop me an email</a>.`;

  contactSection.appendChild(contactText);

  return contactSection;
}
