/* =============================================
   SchichtBuddy – Shared Script
   ============================================= */

(function () {
  'use strict';

  // ── Nav scroll state ──────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    const updateNav = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // ── Intersection Observer fade-in ─────────
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

  // ── Active nav link ───────────────────────
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Smooth anchor scroll ──────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-h')) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 24;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── FAQ accordion ─────────────────────────
  document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (!question || !answer) return;

    // Set initial height
    answer.style.maxHeight = '0';
    answer.style.overflow = 'hidden';
    answer.style.transition = 'max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease';
    answer.style.opacity = '0';

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-item.open').forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          const a = openItem.querySelector('.faq-answer');
          const ic = openItem.querySelector('.faq-icon');
          if (a) { a.style.maxHeight = '0'; a.style.opacity = '0'; }
          if (ic) ic.textContent = '+';
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = '0';
        answer.style.opacity = '0';
        if (icon) icon.textContent = '+';
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
        if (icon) icon.textContent = '×';
      }
    });
  });

  // ── Copy to clipboard ─────────────────────
  document.querySelectorAll('[data-copy]').forEach((el) => {
    el.addEventListener('click', () => {
      const text = el.getAttribute('data-copy');
      navigator.clipboard.writeText(text).then(() => {
        const orig = el.textContent;
        el.textContent = 'Kopiert!';
        setTimeout(() => { el.textContent = orig; }, 1800);
      });
    });
  });

  // ── Parallax hero ─────────────────────────
  const hero = document.querySelector('.hero-visual');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      hero.style.transform = `translateY(${scrolled * 0.08}px)`;
    }, { passive: true });
  }

  // ── Mobile nav toggle ─────────────────────
  const menuBtn = document.querySelector('.nav-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open);
    });
  }

})();
