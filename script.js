
(function () {
  const portrait = document.getElementById('portrait');
  if (!portrait) return;

  function activate() {
    portrait.classList.add('is-active');
  }
  function deactivate() {
    portrait.classList.remove('is-active');
  }

  portrait.addEventListener('pointerenter', (e) => {
    if (e.pointerType === 'mouse') activate();
  });
  portrait.addEventListener('pointerleave', deactivate);
  portrait.addEventListener('pointercancel', deactivate);

  portrait.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') activate();
  });
  portrait.addEventListener('pointerup', deactivate);

  window.addEventListener('pointerup', deactivate);
  window.addEventListener('blur', deactivate);
})();

(function () {
  const container = document.getElementById('particles');
  if (!container) return;

  const COUNT = 14;
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    const left = Math.random() * 100;
    const delay = Math.random() * 12;
    const duration = 9 + Math.random() * 8;
    const size = 2 + Math.random() * 2;
    p.style.left = left + '%';
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.animationDelay = delay + 's';
    p.style.animationDuration = duration + 's';
    container.appendChild(p);
  }
})();
