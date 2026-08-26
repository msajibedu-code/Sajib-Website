const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.querySelector('span').textContent = isOpen ? '×' : '+';
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('span').textContent = '+';
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(contactForm).get('name');
  formStatus.textContent = `Thanks${name ? `, ${name}` : ''}. Your message is ready to send.`;
  contactForm.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();