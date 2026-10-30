const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.nav-toggle');
if (nav && toggle) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
  const current = document.body.dataset.page;
  const activeHref = current === 'home' ? 'index.html' : `${current}.html`;
  nav.querySelectorAll('a').forEach(link => {
    if (link.getAttribute('href') === activeHref) link.setAttribute('aria-current', 'page');
  });
}

