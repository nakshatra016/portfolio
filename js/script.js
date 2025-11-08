// Theme toggle and small helpers
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
    // respect system preference
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) document.body.classList.add('dark');
  }
}
// --- Mobile navigation toggle ---
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    document.body.classList.toggle('nav-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}


function toggleTheme(){
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

themeButtons.forEach(b=>b && b.addEventListener('click', toggleTheme));
setYear(); loadTheme();
