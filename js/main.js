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
    // Validation temps réel email
    var emailInput = document.getElementById('email');
    if (emailInput) {
      emailInput.addEventListener('input', function () {
        var val = emailInput.value.trim();
        var isValid = /[^@\s]+@[^@\s]+\.[^@\s]+/.test(val);
        emailInput.style.borderColor = isValid || val === '' ? '#E5E5E5' : '#EF4444';
      });
    }
    // Compteur caractères message
    var messageInput = document.getElementById('message');
    if (messageInput) {
      var counter = document.createElement('div');
      counter.style.textAlign = 'right';
      counter.style.fontSize = '0.85rem';
      counter.style.color = '#737373';
      messageInput.parentElement.appendChild(counter);
      var max = 1000;
      function updateCount() {
        var len = (messageInput.value || '').length;
        counter.textContent = len + ' / ' + max;
        if (len > max) counter.style.color = '#EF4444'; else counter.style.color = '#737373';
      }
      messageInput.addEventListener('input', updateCount);
      updateCount();
    }
    // Loading state bouton submit
    form.addEventListener('submit', function () {
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i data-lucide="loader-2"></i> Envoi…';
        if (window.lucide) window.lucide.createIcons();
      }
    });
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

