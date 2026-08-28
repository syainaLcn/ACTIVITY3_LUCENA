
(function () {
  const POSTER_W = 500;
  const POSTER_H = 750;
  const MARGIN = 24; 

  function fitPoster() {
    const availW = window.innerWidth - MARGIN;
    const availH = window.innerHeight - MARGIN;
    const scale = Math.min(availW / POSTER_W, availH / POSTER_H, 1);
    document.documentElement.style.setProperty('--poster-scale', scale);
  }

  fitPoster();
  window.addEventListener('resize', fitPoster);
  window.addEventListener('orientationchange', fitPoster);
})();

(function () {
  const portrait = document.getElementById('portrait');
  const overlay = document.getElementById('poemOverlay');
  const closeBtn = document.getElementById('poemClose');
  if (!portrait || !overlay || !closeBtn) return;

  function openOverlay() {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
  }
  function closeOverlay() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
  }

  portrait.addEventListener('click', (e) => {
    if (e.target.closest('.poem-overlay')) return;
    openOverlay();
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeOverlay();
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
  });
})();

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
  const portrait = document.getElementById('portrait');
  const hint = document.getElementById('cursorHint');
  if (!portrait || !hint) return;

  function moveHint(e) {
    const rect = portrait.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    hint.style.transform = `translate(${x}px, ${y}px)`;
  }

  portrait.addEventListener('pointerenter', (e) => {
    if (e.pointerType !== 'mouse') return;
    hint.classList.add('is-visible');
    moveHint(e);
  });

  portrait.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    moveHint(e);
  });

  portrait.addEventListener('pointerleave', () => {
    hint.classList.remove('is-visible');
  });

  portrait.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse') hint.classList.remove('is-visible');
  });
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
