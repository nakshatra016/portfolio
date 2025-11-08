// ---------------------------
// Theme toggle & footer year
// ---------------------------
const themeButtons = [...document.querySelectorAll('[id^="theme-toggle"]')];
const yearEls = [...document.querySelectorAll('[id^="year"]')];

function setYear() {
  const y = new Date().getFullYear();
  yearEls.forEach(e => e.textContent = y);
}

function loadTheme() {
  const t = localStorage.getItem('theme');
  if (t === 'dark') document.body.classList.add('dark');
  if (!t) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.body.classList.add('dark');
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

themeButtons.forEach(b => b && b.addEventListener('click', toggleTheme));
setYear();
loadTheme();

// ---------------------------
// Mobile menu toggle
// ---------------------------
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');

  if (!btn || !nav) {
    console.error("⚠️ Missing #navToggle or #mainNav in HTML.");
    return;
  }

  // Ensure aria defaults
  btn.setAttribute('aria-expanded', 'false');
  nav.setAttribute('aria-hidden', 'true');

  const toggleNav = () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    nav.setAttribute('aria-hidden', String(isOpen));
    document.body.classList.toggle('nav-open', !isOpen);
    nav.classList.toggle('open', !isOpen);
  };

  btn.addEventListener('click', toggleNav);

  // Close when clicking outside
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !btn.contains(e.target) && nav.classList.contains('open')) {
      btn.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-hidden', 'true');
      nav.classList.remove('open');
      document.body.classList.remove('nav-open');
    }
  });

  // ESC to close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      btn.click();
    }
  });

  console.info("✅ Mobile menu initialized.");
});
