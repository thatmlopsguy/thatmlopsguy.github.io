// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
    });

    // Close menu on link click
    menu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        menu.classList.remove('active');
        toggle.classList.remove('active');
      });
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
