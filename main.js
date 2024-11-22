// efek scroll lambat
// document.addEventListener('wheel', function (event) {
//     event.preventDefault(); // Mencegah scroll default
//     window.scrollBy({
//         top: event.deltaY * 0.8,
//         behavior: 'smooth' // Menambahkan animasi halus
//     });
// }, { passive: false });

// hamburger
const hamburgerMenu = document.getElementById('hamburger-menu');
const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('li'); // Ambil semua elemen <li> dalam <nav>

// Fungsi untuk toggle menu
hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon = hamburgerMenu.querySelector('i');

    // Toggle antara ikon 'bars' dan 'times'
    if (nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fungsi untuk menutup menu saat item <li> diklik
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        const icon = hamburgerMenu.querySelector('i');

        // Ubah ikon kembali ke 'bars'
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});
