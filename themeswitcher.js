
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('theme-toggle');
  const thumb = btn.querySelector('.theme-switch-thumb');
  const scope = document.querySelector('.jb-scope');

  // Estado inicial: solo "light"
  scope.classList.add('light');


  btn.addEventListener('click', function() {
    const isLight = scope.classList.contains('light');
    scope.classList.remove('light', 'dark');
    scope.classList.add(isLight ? 'dark' : 'light');

    btn.classList.toggle('dark');
    // Cambia el icono
    thumb.innerHTML = btn.classList.contains('dark')
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
    // Aquí puedes agregar tu lógica para cambiar el tema de la página
    // document.body.classList.toggle('dark');
  });
});
