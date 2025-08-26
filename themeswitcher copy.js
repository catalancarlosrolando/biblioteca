(function () {
  const scope = document.querySelector('.jb-scope');
  const toggle = document.getElementById('theme-toggle');

  if (!scope || !toggle) return;

  // Estado inicial: solo "light"
  scope.classList.add('light');
  toggle.textContent = 'Modo oscuro 🌙';

  toggle.addEventListener('click', () => {
    const isLight = scope.classList.contains('light');

    // Borro ambas primero para evitar acumulación
    scope.classList.remove('light', 'dark');

    // Agrego la correcta
    scope.classList.add(isLight ? 'dark' : 'light');

    // Cambio el texto del botón
    toggle.textContent = isLight ? 'Modo claro 🌞' : 'Modo oscuro 🌙';
  });
})();