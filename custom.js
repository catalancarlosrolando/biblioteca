(function () {
  const scope = document.querySelector('.jb-scope');
  if (!scope) return;

  const menu = scope.querySelector('#jb-menu');
  const burger = scope.querySelector('.hamburger');
  const hero = scope.querySelector('.jb-hero');
  const light = scope.querySelector('.ambient-light');

  // Mobile menu toggle
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('open', !expanded);
    });
  }

  // Ambient interactive light
  if (hero && light && window.matchMedia('(pointer:fine)').matches) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      light.style.background = `radial-gradient(600px circle at ${x}px ${y}px, hsl(var(--primary) / 0.25), transparent 40%)`;
    });

    hero.addEventListener('mouseleave', () => {
      light.style.background = `radial-gradient(600px circle at 50% 50%, hsl(var(--primary) / 0.25), transparent 40%)`;
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('#jb-menu > li > a.has-submenu');
    
    menuItems.forEach(item => {
      item.addEventListener('click', function(e) {
        if (window.innerWidth <= 960) {
          e.preventDefault();
          const parent = this.parentElement;
          
          // Close other submenus
          menuItems.forEach(otherItem => {
            if (otherItem !== this) {
              otherItem.parentElement.classList.remove('active');
            }
          });
          
          // Toggle current submenu
          parent.classList.toggle('active');
        }
      });
    });
  });
})();
