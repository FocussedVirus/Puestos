const toggleBtn = document.getElementById('toggleMenu');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('oculto');
});
