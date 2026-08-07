/* ============================================
   Goat FPC — Trust Ledger Counter Animation
   Numbers count up when scrolled into view
   ============================================ */

(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function formatNumber(num) {
    if (num >= 10000) {
      return num.toLocaleString('en-IN');
    }
    return String(num);
  }

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;

    if (prefersReduced) {
      el.textContent = formatNumber(target) + suffix;
      return;
    }

    var duration = 1600; // ms
    var start = null;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);

      el.textContent = formatNumber(current) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = formatNumber(target) + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  function initLedgerCounters() {
    var counters = document.querySelectorAll('.stats-bar__number[data-count], .stats__number[data-count]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback: just show final numbers
      counters.forEach(function (el) {
        var suffix = el.getAttribute('data-suffix') || '';
        el.textContent = formatNumber(parseInt(el.getAttribute('data-count'), 10)) + suffix;
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLedgerCounters();
  });
})();
