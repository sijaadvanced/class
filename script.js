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

// BENTAR, INI LAGI NYOBA TAB INDICATOR
// TAPI GAK TAU BISA ATAU NGGAK HEHE
// UPDATE: BISA TAPI AGAK RUSAK DIKIT TOLONG :<
function activeTab(btn) {
    const tab = document.querySelectorAll('#navMenu li');
    tab.forEach((li => {
        li.classList.remove('active');
    }));
    btn.closest('li').classList.add('active');
}

// RESPONSIVE MOBILE VIEW
const semuaKartu = document.querySelectorAll('.kartu');
const mq = window.matchMedia('(max-width: 745px)');

function tampilkanHari(hariId) {
    if (!mq.matches) return;
    semuaKartu.forEach(k => k.style.display = 'none');
    const hari = document.getElementById(hariId);
    if (hari) hari.style.display = 'flex';
}

function updateView(e) {
    if (!e.matches) {
        semuaKartu.forEach(k => k.style.display = 'flex');
    } else {
        hariIni();
    }
}

updateView(mq);
mq.addEventListener('change', updateView)

function blokNormatif() {
    const normatif = document.querySelector('.blokNormatif');
    const kejuruan = document.querySelector('.blokKejuruan');

    normatif.style.display = 'flex';
    kejuruan.style.display = 'none';
}

function blokKejuruan() {
    const normatif = document.querySelector('.blokNormatif');
    const kejuruan = document.querySelector('.blokKejuruan');

    normatif.style.display = 'none';
    kejuruan.style.display = 'flex';
}

blokNormatif()

// GET TODAY, TAPI BELUM BISA DETECT N/K
function hariIni() {
    const hariIndex = new Date().getDay();
    const mapHari = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
    let hariId;
    if (hariIndex === 0 || hariIndex === 6) {
        hariId = 'senin';
    } else {
        hariId = mapHari[hariIndex];
    }
    tampilkanHari(hariId);
}

document.addEventListener('DOMContentLoaded', () => {
    updateView(mq);
});

function normatif() {
    if (mq.matches) return;
    semuaKartu.forEach(k => k.style.display = 'flex');
}

// KALO SCREEN SIZE BERUBAH, UPDATE STATE
// const mobileView = window.matchMedia('(max-width:745px)');
// mobileView.addEventListener('change', hariIni);
// if (mobileView.matches) {
//     hariIni(mobileView);
// }