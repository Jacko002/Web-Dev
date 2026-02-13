(function () {
  'use strict';

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      menuBtn.classList.toggle('is-active');
      document.body.classList.toggle('menu-open');
    });
  }

  // Close menu when clicking a nav link (mobile); safe when menu elements are missing
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav) nav.classList.remove('is-open');
      if (menuBtn) menuBtn.classList.remove('is-active');
      document.body.classList.remove('menu-open');
    });
  });

  // Subtle header background on scroll
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Optional: intersection observer for section fade-in (add .reveal class to sections if you want)
  var sections = document.querySelectorAll('.section');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    sections.forEach(function (section) {
      section.classList.add('reveal');
      observer.observe(section);
    });
  }
})();
