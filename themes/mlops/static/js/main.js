// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  if (toggle && menu) {
    function setMenuOpen(open) {
      menu.classList.toggle('active', open);
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    toggle.addEventListener('click', function() {
      setMenuOpen(!menu.classList.contains('active'));
    });

    // Close menu on link click
    menu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        setMenuOpen(false);
      });
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && menu.classList.contains('active')) {
        setMenuOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener('click', function(event) {
      if (menu.classList.contains('active') && !menu.contains(event.target) && !toggle.contains(event.target)) {
        setMenuOpen(false);
      }
    });

    // Reset state when the viewport grows past the mobile breakpoint
    window.matchMedia('(min-width: 1025px)').addEventListener('change', function(event) {
      if (event.matches) {
        setMenuOpen(false);
      }
    });
  }

  // Header background on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.style.borderBottomColor = 'rgba(148, 163, 184, 0.15)';
      } else {
        header.style.borderBottomColor = 'rgba(148, 163, 184, 0.1)';
      }
    });
  }
});
