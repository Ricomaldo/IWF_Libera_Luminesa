// /Users/irimwebforge/Projets/pro/Libera-Luminesa/js/main.js
// Logique JS commune: icônes, navigation active, smooth scroll, vidéos/maps en click-to-load,
// timeline animations, gestion formulaire contact.

(function () {
  function onReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  function getCurrentPathname() {
    var path = window.location.pathname || '';
    if (!path || path === '/' || path.endsWith('/')) return 'index.html';
    return path.split('/').pop();
  }

  function setActiveNavigation() {
    var current = getCurrentPathname();
    var navLinks = document.querySelectorAll('.nav-menu .nav-link');
    var bottomItems = document.querySelectorAll('.bottom-nav-item');

    function markActive(el) {
      var href = el.getAttribute('href') || '';
      if (!href) return false;
      return href === current || (current === 'index.html' && (href === './' || href === '/'));
    }

    navLinks.forEach(function (link) {
      if (markActive(link)) link.classList.add('active');
      else link.classList.remove('active');
    });

    bottomItems.forEach(function (item) {
      if (markActive(item)) item.classList.add('active');
      else item.classList.remove('active');
    });
  }

  function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetSelector = this.getAttribute('href');
        if (!targetSelector || targetSelector === '#') return;
        var target = document.querySelector(targetSelector);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function initLucide() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function initYouTubeClickToLoad() {
    // Requiert un conteneur avec un bouton .js-load-yt et attribut data-ytid
    var triggers = document.querySelectorAll('.js-load-yt[data-ytid]');
    triggers.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var ytid = btn.getAttribute('data-ytid');
        var container = btn.closest('[data-yt-container]') || btn.parentElement;
        if (!ytid || !container) return;
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://www.youtube-nocookie.com/embed/' + ytid + '?autoplay=1');
        iframe.setAttribute('title', 'Lecture vidéo YouTube');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('loading', 'lazy');
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';

        // Nettoie le placeholder et insère l'iframe
        container.innerHTML = '';
        container.appendChild(iframe);
      });
    });
  }

  function initMapClickToLoad() {
    var mapBtn = document.querySelector('.js-load-map[data-map-src]');
    if (!mapBtn) return;
    mapBtn.addEventListener('click', function () {
      var src = mapBtn.getAttribute('data-map-src');
      var container = document.querySelector('[data-map-container]');
      if (!src || !container) return;
      var iframe = document.createElement('iframe');
      iframe.setAttribute('src', src);
      iframe.setAttribute('width', '100%');
      iframe.setAttribute('height', '400');
      iframe.setAttribute('style', 'border:0; border-radius: 1rem;');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');
      iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      iframe.setAttribute('title', 'Localisation du cabinet Libera Luminosa à Aspach-le-Bas');
      container.innerHTML = '';
      container.appendChild(iframe);
      // Optionnel: masquer le bouton une fois chargé
      mapBtn.parentElement && (mapBtn.parentElement.style.display = 'none');
    });
  }

  function initTimelineObserver() {
    var items = document.querySelectorAll('.timeline-item');
    if (!items.length) return;
    var observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    items.forEach(function (item) { observer.observe(item); });
  }

  function initContactForm() {
    var form = document.querySelector('.contact-form');
    if (!form) return;
    // Affiche un message de confirmation si redirection Formspree avec sent=1
    var url = new URL(window.location.href);
    if (url.searchParams.get('sent') === '1') {
      form.innerHTML = '<div style="text-align:center;padding:2rem;background:#F8F8FF;border-radius:12px;">' +
        '<h3 style="color:#D4AF37;margin-bottom:0.5rem;">✨ Message envoyé !</h3>' +
        '<p>Merci ! Séverine vous répondra rapidement.</p>' +
        '</div>';
      return;
    }
    // Laisse Formspree gérer la soumission (pas d’AJAX)
  }

  onReady(function () {
    initLucide();
    setActiveNavigation();
    enableSmoothScroll();
    initYouTubeClickToLoad();
    initMapClickToLoad();
    initTimelineObserver();
    initContactForm();
  });
}());

