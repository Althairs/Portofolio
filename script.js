document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.navbar-toggle'); // Tombol toggle
  const navbarMenu = document.querySelector('.navbar-menu'); // Menu navigasi

  toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active'); // Tambahkan/hapus kelas active
  });
});
