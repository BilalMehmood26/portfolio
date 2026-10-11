document.getElementById('copyBtn')?.addEventListener('click', e => {
  const t = document.getElementById('email').textContent, b = e.currentTarget;
  const done = () => { b.textContent = 'Copied'; setTimeout(() => b.textContent = 'Copy', 1600); };
  try {
    navigator.clipboard.writeText(t).then(done, sel);
  } catch (_) { sel(); }
  function sel(){ const r = document.createRange(); r.selectNodeContents(document.getElementById('email')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = 'Selected'; }
});

// Pop the home-screen app icons in when the section scrolls into view
document.documentElement.classList.add('js');
const appsShow = document.querySelector('.apps-show');
if (appsShow && 'IntersectionObserver' in window) {
  new IntersectionObserver((entries, io) => {
    if (entries[0].isIntersecting) { appsShow.classList.add('in'); io.disconnect(); }
  }, { threshold: 0.3 }).observe(appsShow);
} else if (appsShow) appsShow.classList.add('in');

// Fade each phone screenshot in once it has downloaded (the frame shows a shimmer until then)
document.querySelectorAll('.shot img').forEach(img => {
  const done = () => img.parentElement.classList.add('loaded');
  if (img.complete && img.naturalWidth) done();
  else { img.addEventListener('load', done, { once: true }); img.addEventListener('error', done, { once: true }); }
});
