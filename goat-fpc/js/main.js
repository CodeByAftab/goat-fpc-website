/* ============================================
   Goat FPC — Main JS
   Mobile nav, smooth scroll, header/footer includes, scroll animations
   ============================================ */

(function () {
  'use strict';

  /* ---- Include header and footer ---- */
  async function loadPartials() {
    const headerEl = document.getElementById('site-header');
    const footerEl = document.getElementById('site-footer');

    const tasks = [];

    if (headerEl) {
      tasks.push(
        fetch('/header.html')
          .then(function (r) { return r.text(); })
          .then(function (html) {
            headerEl.innerHTML = html;
            initNav();
            highlightActivePage();
          })
      );
    }

    if (footerEl) {
      tasks.push(
        fetch('/footer.html')
          .then(function (r) { return r.text(); })
          .then(function (html) {
            footerEl.innerHTML = html;
          })
      );
    }

    await Promise.all(tasks);
  }

  /* ---- Mobile nav toggle ---- */
  function initNav() {
    var toggle = document.querySelector('.header__hamburger');
    var mobileMenu = document.querySelector('.header__mobile-menu');
    if (!toggle || !mobileMenu) return;

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('header__mobile-menu--open');
    });

    // Close nav on link click (mobile)
    mobileMenu.querySelectorAll('.header__mobile-link').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('header__mobile-menu--open');
      });
    });

    // Close nav on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('header__mobile-menu--open')) {
        toggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('header__mobile-menu--open');
        toggle.focus();
      }
    });
  }

  /* ---- Highlight active page in nav ---- */
  function highlightActivePage() {
    var path = window.location.pathname;
    // Desktop links
    var desktopLinks = document.querySelectorAll('.header__link[data-page]');
    desktopLinks.forEach(function (link) {
      var page = link.getAttribute('data-page');
      if (page === 'index' && (path === '/' || path === '/index.html')) {
        link.classList.add('header__link--active');
      } else if (page !== 'index' && path.indexOf('/' + page + '.html') !== -1) {
        link.classList.add('header__link--active');
      }
    });
    // Mobile links
    var mobileLinks = document.querySelectorAll('.header__mobile-link[data-page]');
    mobileLinks.forEach(function (link) {
      var page = link.getAttribute('data-page');
      if (page === 'index' && (path === '/' || path === '/index.html')) {
        link.classList.add('header__mobile-link--active');
      } else if (page !== 'index' && path.indexOf('/' + page + '.html') !== -1) {
        link.classList.add('header__mobile-link--active');
      }
    });
  }

  /* ---- Smooth scroll for anchor links ---- */
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;
      var targetId = link.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  }

  /* ---- Scroll animations (fade-in on scroll) ---- */
  function initScrollAnimations() {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    var animatedEls = document.querySelectorAll(
      '.card, .news-card, .service-card, .benefit, .stats-bar__item, .contact-card, .team-card'
    );

    if (!animatedEls.length) return;

    // Set initial state
    animatedEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

      animatedEls.forEach(function (el) { observer.observe(el); });
    } else {
      animatedEls.forEach(function (el) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    }
  }

  /* ---- Init ---- */
  document.addEventListener('DOMContentLoaded', function () {
    loadPartials();
    initSmoothScroll();
    initScrollAnimations();
  });
})();
