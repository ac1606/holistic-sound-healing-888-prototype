// Shared header/footer + interaction layer for the HSH 888 site.

const NAV_LINKS = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About' },
  { href: 'services.html', label: 'Services' },
  { href: 'testimonials.html', label: 'Testimonials' },
  { href: 'contact.html', label: 'Contact' },
];

function currentPage() {
  const path = window.location.pathname.split('/').pop();
  return path === '' ? 'index.html' : path;
}

function renderNav() {
  const mount = document.getElementById('site-nav');
  if (!mount) return;
  const active = currentPage();
  const links = NAV_LINKS.map(
    (l) => `<a href="${l.href}" class="${l.href === active ? 'active' : ''}">${l.label}</a>`
  ).join('');
  mount.innerHTML = `
    <nav class="nav" id="nav">
      <div class="nav-inner">
        <a class="nav-logo" href="index.html">
          <img src="assets/images/logo-transparent.png" alt="HSH 888 logo">
          <span>HSH 888</span>
        </a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="nav-links">${links}</ul>
        <a class="btn btn-primary nav-cta" href="contact.html">Book a Consultation</a>
      </div>
    </nav>`;

  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 12);
  });
}

function renderFooter() {
  const mount = document.getElementById('site-footer');
  if (!mount) return;
  mount.innerHTML = `
    <footer class="footer">
      <div class="footer-inner">
        <img src="assets/images/logo-transparent.png" alt="HSH 888" class="footer-logo">
        <p>&copy; <span id="year"></span> Holistic Sound Healing 888. All rights reserved.</p>
        <p class="footer-contact">+1 (416) 688-8168 &middot; hshealing888@gmail.com &middot; @holisticsoundhealing888</p>
      </div>
    </footer>`;
  document.getElementById('year').textContent = new Date().getFullYear();
}

function initScrollReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('revealed'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  targets.forEach((t) => io.observe(t));
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initTestimonialCarousel() {
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  const slides = track.querySelectorAll('.carousel-slide');
  const dotsWrap = document.querySelector('.carousel-dots');
  let index = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, di) => d.classList.toggle('active', di === index));
  }

  document.querySelector('.carousel-next')?.addEventListener('click', () => goTo(index + 1));
  document.querySelector('.carousel-prev')?.addEventListener('click', () => goTo(index - 1));

  let auto = setInterval(() => goTo(index + 1), 6000);
  track.closest('.carousel').addEventListener('mouseenter', () => clearInterval(auto));
  track.closest('.carousel').addEventListener('mouseleave', () => (auto = setInterval(() => goTo(index + 1), 6000)));
}

function initFreebieForm() {
  const form = document.getElementById('freebie-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.textContent = 'Sent! Check your inbox';
    btn.classList.add('is-success');
    form.querySelector('input').disabled = true;
  });
}

function initParallax() {
  const els = document.querySelectorAll('[data-parallax]');
  if (!els.length) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    els.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      el.style.backgroundPositionY = `${y * speed}px`;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  initScrollReveal();
  initSmoothAnchors();
  initTestimonialCarousel();
  initFreebieForm();
  initParallax();
  document.body.classList.add('page-loaded');
});
