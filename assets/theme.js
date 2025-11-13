const btn = document.getElementById('theme-toggle');

// Beim Laden Theme aus localStorage oder System übernehmen
const stored = localStorage.getItem('theme');
if (stored) {
  document.documentElement.setAttribute('data-theme', stored);
  btn.textContent = stored === 'dark' ? '🌙' : '☀️';
} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  document.documentElement.setAttribute('data-theme', 'light');
  btn.textContent = '☀️';
} else {
  document.documentElement.setAttribute('data-theme', 'dark');
  btn.textContent = '🌙';
}

// Klick toggelt Theme und speichert Auswahl
btn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  btn.textContent = next === 'dark' ? '🌙' : '☀️';
});
