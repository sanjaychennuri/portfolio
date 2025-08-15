// Typewriter effect without external libraries
const roles = [
  "AWS Cloud Enthusiast",
  "Front‑end Developer",
  "Python Learner"
];
let idx = 0, char = 0, dir = 1;
const typedEl = document.getElementById('typed');

function tick() {
  if (!typedEl) return;
  const word = roles[idx];
  char += dir;
  typedEl.textContent = word.slice(0, char);
  if (char === word.length + 8) dir = -1;          // pause at full text
  if (char === 0) { dir = 1; idx = (idx + 1) % roles.length; }
  setTimeout(tick, dir > 0 ? 80 : 40);
}
tick();

// Intersection Observer reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn?.addEventListener('click', () => {
  const isOpen = nav.style.display === 'block';
  nav.style.display = isOpen ? 'none' : 'block';
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
themeToggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  root.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
});
// current year
document.getElementById('year').textContent = new Date().getFullYear();
