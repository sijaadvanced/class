// TOGGLE MENU NAVIGASI
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    const hamburger = document.getElementById("hamburger");
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
}

document.addEventListener("click", function (e) {
    const menu = document.getElementById("navMenu");
    const hamburger = document.getElementById("hamburger");

    if (menu.classList.contains("active")) {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.classList.remove("active");
            hamburger.classList.remove("active");
        }
    }
});

// GANTI HALAMAN
function showPage(pageId) {
    document
        .querySelectorAll(".page")
        .forEach((page) => page.classList.remove("active"));
    document.getElementById(pageId + "-page").classList.add("active");
    window.scrollTo(0, 0);
}

showPage("home");
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    const hamburger = document.getElementById("hamburger");
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
}

// RESPONSIVE MOBILE VIEW
function tampilkanHari(hariId) {
    const isMobile = window.matchMedia('(max-width: 745px)').matches;
    const semuaKartu = document.querySelectorAll('.kartu');
    if (!isMobile) {
    const semuaKartu = document.querySelectorAll('.kartu');
    semuaKartu.forEach(k => k.style.display = 'block');
    };
    
    semuaKartu.forEach(k => k.style.display = 'none');

    const hari = document.getElementById(hariId);
    if (hari) {
        hari.style.display = 'block';
    }
}

// GET TODAY, TAPI BELUM BISA DETECT N/K
function hariIni() {
    const hariIndex = new Date().getDay();
    const mapHari = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
    tampilkanHari(mapHari[hariIndex]);
}

document.addEventListener('DOMContentLoaded', hariIni)

function normatif() {
    const normatif = document.getElementById('normatif');
    const semuaKartu = document.querySelectorAll('.kartu');
    semuaKartu.forEach(k => k.style.display = 'block');
}

// KALO SCREEN SIZE BERUBAH, UPDATE STATE
const mobileView = window.matchMedia('(max-width: 600px)');
mobileView.addEventListener('change', hariIni);
if (mobileView.matches) {
    hariIni(mobileView);
}

document.addEventListener("click", function (e) {
    const uli = document.querySelectorAll("ul li button");
    uli.forEach(button => button.classList.toggle("active"));
});

document.querySelectorAll()