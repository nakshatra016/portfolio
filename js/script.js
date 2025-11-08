// ----------------- theme + year (keeps your existing logic) -----------------
const themeButtons = [...document.querySelectorAll('[id^="theme-toggle"]')];
const yearEls = [...document.querySelectorAll('[id^="year"]')];

function setYear(){
  const y = new Date().getFullYear();
  yearEls.forEach(e=>e.textContent = y);
}

function loadTheme(){
  const t = localStorage.getItem('theme');
  if(t === 'dark') document.body.classList.add('dark');
  if(!t){
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.body.classList.add('dark');
  }
}

function toggleTheme(){
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

themeButtons.forEach(b=>b && b.addEventListener('click', toggleTheme));
setYear(); loadTheme();

// ----------------- Mobile nav toggle (robust) -----------------
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');

  // helpful debugging info
  if (!btn) console.warn('Nav toggle button (#navToggle) NOT found in DOM.');
  if (!nav) console.warn('Main nav element (#mainNav) NOT found in DOM.');

  // abort if either missing
  if (!btn || !nav) return;

  // ensure ARIA attributes exist
  if (!btn.hasAttribute('aria-expanded')) btn.setAttribute('aria-expanded', 'false');
  if (!nav.hasAttribute('aria-hidden')) nav.setAttribute('aria-hidden', 'true');

  // toggle function
  function setNavOpen(open) {
    const isOpen = !!open;
    btn.setAttribute('aria-expanded', String(isOpen));
    nav.setAttribute('aria-hidden', String(!isOpen));
    document.body.classList.toggle('nav-open', isOpen);
    btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    // add/remove open class for CSS if used
    if (isOpen) nav.classList.add('open'); else nav.classList.remove('open');
  }

  // click toggles
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const currentlyOpen = btn.getAttribute('aria-expanded') === 'true';
    setNavOpen(!currentlyOpen);
  });

  // close on outside click
  document.addEventListener('click', function (e) {
    // if nav is open and click target is outside nav and button, close it
    if (btn.getAttribute('aria-expanded') === 'true' && !nav.contains(e.target) && !btn.contains(e.target)) {
      setNavOpen(false);
    }
  });

  // close on ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      setNavOpen(false);
      btn.focus();
    }
  });

  // ensure button is on top of layout so taps work
  btn.style.zIndex = 10001;

  console.info('Mobile nav script loaded: button and nav found.');
});
