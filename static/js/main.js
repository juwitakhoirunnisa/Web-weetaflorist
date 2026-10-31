// Toggle Navbar Mobile
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
}

// Efek Kirim Form Kontak
const form = document.getElementById('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const btn = e.target.querySelector('button');
        const originalHtml = btn.innerHTML;
        
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Pesan Terkirim!';
        btn.style.background = '#5d6d4b'; // Warna Hijau Olive

        setTimeout(() => { 
            btn.innerHTML = originalHtml; 
            btn.style.background = '';
            e.target.reset(); 
        }, 3000);
    });
}
