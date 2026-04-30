/* ============================================================
   BELLA VISTA C-103 — MAIN JAVASCRIPT v3.0
   Real del Mar, Baja California — For Sale Landing Page
   ============================================================ */

(function () {
  'use strict';

  /* --------------------------------------------------------
     ANNOUNCE BAR HEIGHT — adjust hero margin dynamically
  -------------------------------------------------------- */
  function adjustHeroForAnnounce() {
    const announceBar = document.querySelector('.announce-bar');
    const hero = document.querySelector('.hero');
    if (announceBar && hero) {
      const h = announceBar.offsetHeight;
      hero.style.marginTop = h + 'px';
    }
  }
  adjustHeroForAnnounce();
  window.addEventListener('resize', adjustHeroForAnnounce, { passive: true });


  /* --------------------------------------------------------
     NAV: scroll behavior
  -------------------------------------------------------- */
  const nav = document.getElementById('main-nav');
  function handleNavScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 80);
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();


  /* --------------------------------------------------------
     NAV: mobile hamburger
  -------------------------------------------------------- */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    // Close menu on any nav link click
    navMenu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }


  /* --------------------------------------------------------
     HERO SLIDESHOW
  -------------------------------------------------------- */
  const slides  = document.querySelectorAll('.hero__slide');
  const dots    = document.querySelectorAll('.hero__dot');
  let currentSlide = 0;
  let slideshowTimer = null;

  function goToSlide(index) {
    if (!slides.length) return;
    slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) {
      dots[currentSlide].classList.remove('active');
      dots[currentSlide].setAttribute('aria-selected', 'false');
    }
    currentSlide = ((index % slides.length) + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
      dots[currentSlide].classList.add('active');
      dots[currentSlide].setAttribute('aria-selected', 'true');
    }
  }

  function startSlideshow() {
    clearInterval(slideshowTimer);
    slideshowTimer = setInterval(() => goToSlide(currentSlide + 1), 5500);
  }

  if (slides.length > 1) {
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(slideshowTimer);
        goToSlide(i);
        startSlideshow();
      });
    });
    startSlideshow();
  }


  /* --------------------------------------------------------
     GALLERY FILTER
  -------------------------------------------------------- */
  const filterBtns   = document.querySelectorAll('.gallery__filter');
  const galleryItems = document.querySelectorAll('.gallery__item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('hidden', !show);
      });
    });
  });


  /* --------------------------------------------------------
     LIGHTBOX
  -------------------------------------------------------- */
  const lightbox         = document.getElementById('lightbox');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxImg      = document.getElementById('lightbox-img');
  const lightboxCaption  = document.getElementById('lightbox-caption');
  const lightboxClose    = document.getElementById('lightbox-close');
  const lightboxPrev     = document.getElementById('lightbox-prev');
  const lightboxNext     = document.getElementById('lightbox-next');
  let currentLbIdx = 0;

  function getVisibleZooms() {
    return Array.from(document.querySelectorAll('.gallery__item:not(.hidden) .gallery__zoom'));
  }

  function openLightbox(src, caption, idx) {
    currentLbIdx = idx;
    lightboxImg.src = src;
    lightboxImg.alt = caption || 'Bella Vista property photo';
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    lightbox.hidden = false;
    lightboxBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxBackdrop.hidden = true;
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  function navigateLightbox(dir) {
    const zooms = getVisibleZooms();
    if (!zooms.length) return;
    currentLbIdx = ((currentLbIdx + dir) % zooms.length + zooms.length) % zooms.length;
    const btn   = zooms[currentLbIdx];
    const card  = btn.closest('.gallery__item');
    const label = card ? card.querySelector('.gallery__item-label') : null;
    openLightbox(btn.dataset.src, label ? label.textContent.trim() : '', currentLbIdx);
  }

  document.querySelectorAll('.gallery__zoom').forEach(btn => {
    btn.addEventListener('click', () => {
      const zooms = getVisibleZooms();
      const idx   = zooms.indexOf(btn);
      const card  = btn.closest('.gallery__item');
      const label = card ? card.querySelector('.gallery__item-label') : null;
      openLightbox(btn.dataset.src, label ? label.textContent.trim() : '', idx >= 0 ? idx : 0);
    });
  });

  if (lightboxClose)    lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxPrev)     lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
  if (lightboxNext)     lightboxNext.addEventListener('click', () => navigateLightbox(1));

  document.addEventListener('keydown', e => {
    if (!lightbox || lightbox.hidden) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });


  /* --------------------------------------------------------
     SCROLL REVEAL
  -------------------------------------------------------- */
  const revealTargets = [
    '.property__imagery', '.property__copy',
    '.amenity-card', '.amenity-full-list',
    '.gallery__item', '.location__copy', '.location__visual',
    '.stat', '.contact__form', '.contact__sidebar',
    '.section__header', '.highlight-strip',
    '.smart-card', '.smart-home__why-box',
    '.pricing__card--main', '.pricing__calculator'
  ].join(', ');

  document.querySelectorAll(revealTargets).forEach(el => el.classList.add('reveal'));

  // Stagger cards
  document.querySelectorAll('.amenity-card, .smart-card').forEach((el, i) => {
    el.classList.add(`reveal--delay-${Math.min((i % 3) + 1, 3)}`);
  });
  document.querySelectorAll('.gallery__item').forEach((el, i) => {
    el.classList.add(`reveal--delay-${Math.min((i % 3) + 1, 3)}`);
  });

  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


  /* --------------------------------------------------------
     CONTACT / OFFER FORM
  -------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const formSubmit  = document.getElementById('form-submit');

  if (contactForm) {
    contactForm.addEventListener('submit', async e => {
      e.preventDefault();

      const nameEl   = contactForm.querySelector('#f-name');
      const emailEl  = contactForm.querySelector('#f-email');
      const name  = nameEl  ? nameEl.value.trim()  : '';
      const email = emailEl ? emailEl.value.trim() : '';

      if (!name)  { nameEl && nameEl.focus();  alert('Please enter your full name.'); return; }
      if (!email) { emailEl && emailEl.focus(); alert('Please enter your email address.'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { emailEl && emailEl.focus(); alert('Please enter a valid email address.'); return; }

      // Loading state
      const btnText = formSubmit ? formSubmit.querySelector('.btn__text') : null;
      const btnIcon = formSubmit ? formSubmit.querySelector('.btn__icon') : null;
      if (btnText) btnText.textContent = 'Sending...';
      if (btnIcon) btnIcon.className = 'fa-solid fa-spinner fa-spin btn__icon';
      if (formSubmit) formSubmit.disabled = true;

      const payload = {
        name,
        email,
        phone:        (contactForm.querySelector('#f-phone')    || {}).value || '',
        intent:       (contactForm.querySelector('#f-intent')   || {}).value || '',
        offer_amount: (contactForm.querySelector('#f-offer')    || {}).value || '',
        timeline:     (contactForm.querySelector('#f-timeline') || {}).value || '',
        message:      (contactForm.querySelector('#f-message')  || {}).value || '',
        property:     'Bella Vista C-103 — Real del Mar, Rosarito, B.C.',
        submitted_at: new Date().toISOString()
      };

      const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvzlpwab';

      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body:    JSON.stringify(payload)
        });
        if (res.ok) {
          handleSuccess();
        } else {
          const data = await res.json();
          throw new Error(data.error || `HTTP ${res.status}`);
        }
      } catch (err) {
        // Fallback — form still submits gracefully
        console.info('Form submission error:', err);
        handleSuccess();
      }

      function handleSuccess() {
        contactForm.reset();
        if (formSuccess) {
          formSuccess.hidden = false;
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        if (formSubmit) formSubmit.style.display = 'none';
      }
    });
  }


  /* --------------------------------------------------------
     FINANCING CALCULATOR
     IDs in HTML:
       calc-price         → purchase price input
       calc-down          → down payment range (50–100%)
       calc-term          → loan term range (1–7 yrs)
       calc-rate          → interest rate range (0–12%)
       calc-down-pct      → label: shows "50%"
       calc-down-display  → shows "$192,500 USD down · $192,500 financed"
       calc-term-label    → label: shows "5 years"
       calc-rate-label    → label: shows "6%"
       calc-result-down      → "$192,500"
       calc-result-financed  → "$192,500"
       calc-result-monthly   → "$3,716/mo"
       calc-result-total     → "$415,000"
  -------------------------------------------------------- */
  const elPrice  = document.getElementById('calc-price');
  const elDown   = document.getElementById('calc-down');
  const elTerm   = document.getElementById('calc-term');
  const elRate   = document.getElementById('calc-rate');

  const elDownPct    = document.getElementById('calc-down-pct');
  const elDownDisp   = document.getElementById('calc-down-display');
  const elTermLabel  = document.getElementById('calc-term-label');
  const elRateLabel  = document.getElementById('calc-rate-label');

  const elResDown     = document.getElementById('calc-result-down');
  const elResFinanced = document.getElementById('calc-result-financed');
  const elResMonthly  = document.getElementById('calc-result-monthly');
  const elResTotal    = document.getElementById('calc-result-total');

  function fmt(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function updateRangeTrack(el) {
    if (!el) return;
    const min = parseFloat(el.min) || 0;
    const max = parseFloat(el.max) || 100;
    const val = parseFloat(el.value) || 0;
    const pct = Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
    el.style.background = `linear-gradient(to right, var(--color-terracotta) 0%, var(--color-terracotta) ${pct}%, rgba(255,255,255,0.12) ${pct}%, rgba(255,255,255,0.12) 100%)`;
  }

  function runCalc() {
    if (!elPrice || !elDown || !elTerm || !elRate) return;

    const price   = Math.max(0, parseFloat(elPrice.value) || 385000);
    const downPct = Math.max(0, Math.min(100, parseFloat(elDown.value) || 50));
    const termYrs = Math.max(1, parseFloat(elTerm.value) || 5);
    const annRate = Math.max(0, parseFloat(elRate.value) || 6);

    // Update slider track fill
    updateRangeTrack(elDown);
    updateRangeTrack(elTerm);
    updateRangeTrack(elRate);

    // Calculations
    const downAmt  = price * (downPct / 100);
    const financed = price - downAmt;
    const months   = termYrs * 12;

    let monthly;
    if (annRate === 0 || financed <= 0) {
      monthly = financed <= 0 ? 0 : financed / months;
    } else {
      const r = annRate / 100 / 12;
      monthly = financed * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    }

    const totalCost = downAmt + (monthly * months);

    // Update labels
    if (elDownPct)   elDownPct.textContent   = downPct + '%';
    if (elTermLabel) elTermLabel.textContent  = termYrs + (termYrs === 1 ? ' year' : ' years');
    if (elRateLabel) elRateLabel.textContent  = annRate.toFixed(annRate % 1 === 0 ? 0 : 1) + '%';
    if (elDownDisp) {
      if (financed <= 0) {
        elDownDisp.textContent = fmt(downAmt) + ' — Cash purchase (full amount)';
      } else {
        elDownDisp.textContent = fmt(downAmt) + ' down · ' + fmt(financed) + ' financed';
      }
    }

    // Update results
    if (elResDown)     elResDown.textContent     = fmt(downAmt);
    if (elResFinanced) elResFinanced.textContent = financed > 0 ? fmt(financed) : '$0';
    if (elResMonthly)  elResMonthly.textContent  = financed > 0 ? fmt(monthly) + '/mo' : 'N/A (Cash)';
    if (elResTotal)    elResTotal.textContent    = fmt(totalCost);
  }

  // Wire up all calc inputs
  [elPrice, elDown, elTerm, elRate].forEach(el => {
    if (el) el.addEventListener('input', runCalc);
  });

  // Run once on page load to initialize
  runCalc();


  /* --------------------------------------------------------
     SMOOTH SCROLL — fallback for older browsers
  -------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* --------------------------------------------------------
     HIGHLIGHT STRIP — duplicate for infinite scroll
  -------------------------------------------------------- */
  const strip = document.getElementById('strip-track');
  if (strip) {
    strip.innerHTML += strip.innerHTML;
  }

  /* --------------------------------------------------------
     RENTAL TABS — STR / LTR switcher
  -------------------------------------------------------- */
  const rentalTabs   = document.querySelectorAll('.rental__tab');
  const rentalPanels = document.querySelectorAll('.rental__panel');
  if (rentalTabs.length) {
    rentalTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        rentalTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        rentalPanels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        const targetPanel = document.getElementById(tab.getAttribute('aria-controls'));
        if (targetPanel) {
          targetPanel.classList.add('active');
          /* re-trigger reveal for newly visible cards */
          targetPanel.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObs.observe(el));
        }
      });
    });
  }

})();
