// МИСКАЛЬ — лёгкая интерактивность.
// Принципы из emil-design-eng: только transform/opacity, ease-out,
// короткий stagger, уважение к prefers-reduced-motion.

(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Навигация: фон появляется после скролла ---- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('is-solid');
    else nav.classList.remove('is-solid');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Появление секций при входе во вьюпорт ---- */
  const items = Array.from(document.querySelectorAll('.reveal'));

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;

        // Короткий stagger для соседних карточек в одном контейнере (30-80ms).
        const group = el.parentElement;
        const siblings = Array.from(group.querySelectorAll(':scope > .reveal'));
        const idx = siblings.indexOf(el);
        if (idx > 0) el.style.setProperty('--reveal-delay', Math.min(idx, 6) * 55 + 'ms');

        el.classList.add('is-in');
        io.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
  );

  items.forEach((el) => io.observe(el));
})();
