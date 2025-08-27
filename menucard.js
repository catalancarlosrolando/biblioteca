document.addEventListener('DOMContentLoaded', function () {
  // Mostrar/ocultar menú al hacer click en el botón
  document.querySelectorAll('.menu-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      // Busca el menú desplegable dentro del mismo contenedor
      const menu = btn.parentElement.querySelector('.dropdowneucs');
      // Cierra otros menús abiertos
      document.querySelectorAll('.dropdowneucs.show').forEach(function (openMenu) {
        if (openMenu !== menu) openMenu.classList.remove('show');
      });
      // Alterna el menú actual
      menu.classList.toggle('show');
    });
  });

  // Cierra el menú si se hace click fuera
  document.addEventListener('click', function (event) {
    document.querySelectorAll('.dropdowneucs.show').forEach(function (menu) {
      // Si el clic NO es sobre el menú ni sobre su botón
      const btn = menu.parentElement.querySelector('.menu-btn');
      if (
        !menu.contains(event.target) &&
        !btn.contains(event.target)
      ) {
        menu.classList.remove('show');
      }
    });
  });
});