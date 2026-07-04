/* ==========================================================================
   BAKES & SWEETS — Interactive JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ===== NAVBAR SCROLL EFFECT =====
  const navbar = document.querySelector('.navbar');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ===== MOBILE NAVIGATION =====
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  function toggleMobileNav() {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileNav);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', toggleMobileNav);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav.classList.contains('active')) {
        toggleMobileNav();
      }
    });
  });

  // ===== ACTIVE NAV LINK ON SCROLL =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-links a[href^="#"]');

  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // ===== MENU TABS =====
  const menuTabs = document.querySelectorAll('.menu-tab');
  const menuPanels = document.querySelectorAll('.menu-panel');

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      // Update active tab
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update active panel
      menuPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.dataset.panel === target) {
          panel.classList.add('active');
        }
      });
    });
  });

  // ===== CAKE WEIGHT TOGGLE =====
  const weightBtns = document.querySelectorAll('.weight-btn');
  const cakeGroups = document.querySelectorAll('.cake-weight-group');

  weightBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const weight = btn.dataset.weight;

      weightBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cakeGroups.forEach(group => {
        group.classList.remove('active');
        if (group.dataset.weight === weight) {
          group.classList.add('active');
        }
      });
    });
  });

  // ===== GALLERY LIGHTBOX =====
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Close lightbox with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // ===== CUSTOM CAKE FORM → WHATSAPP =====
  const cakeForm = document.getElementById('customCakeForm');

  if (cakeForm) {
    cakeForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('cakeName').value.trim();
      const phone = document.getElementById('cakePhone').value.trim();
      const occasion = document.getElementById('cakeOccasion').value;
      const flavor = document.getElementById('cakeFlavor').value;
      const weight = document.getElementById('cakeWeight').value;
      const date = document.getElementById('cakeDate').value;
      const message = document.getElementById('cakeMessage').value.trim();

      // Build WhatsApp message
      let waMsg = `🎂 *Custom Cake Order — Bakes & Sweets*\n\n`;
      waMsg += `👤 *Name:* ${name}\n`;
      waMsg += `📞 *Phone:* ${phone}\n`;
      waMsg += `🎉 *Occasion:* ${occasion}\n`;
      waMsg += `🍰 *Flavor:* ${flavor}\n`;
      waMsg += `⚖️ *Weight:* ${weight}\n`;
      waMsg += `📅 *Delivery Date:* ${date}\n`;
      if (message) {
        waMsg += `💬 *Special Instructions:* ${message}\n`;
      }
      waMsg += `\n_Sent via bakesandsweets.in_`;

      const encodedMsg = encodeURIComponent(waMsg);
      window.open(`https://wa.me/918950604890?text=${encodedMsg}`, '_blank');
    });
  }

  // ===== MENU ITEM WHATSAPP ORDER =====
  window.orderOnWhatsApp = function(itemName, price) {
    const msg = `Hi! 👋 I'd like to order *${itemName}*${price ? ` (${price})` : ''} from Bakes & Sweets, Rohtak.\n\nPlease confirm availability and delivery details. Thank you! 🙏`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/918950604890?text=${encoded}`, '_blank');
  };

  // ===== SCROLL REVEAL ANIMATIONS =====
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add stagger delay for grid children
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===== LAZY LOAD IMAGES =====
  const lazyImages = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '200px'
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });

  // ===== SET MIN DATE FOR CAKE ORDER =====
  const dateInput = document.getElementById('cakeDate');
  if (dateInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
  }

  // ===== NAVBAR LOGO SCROLL TO TOP =====
  const logoLink = document.querySelector('.navbar-logo');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    logoLink.style.cursor = 'pointer';
  }

});
