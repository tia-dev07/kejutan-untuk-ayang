/* ========================================
PEMUTAR LAGU ROMANTIS
======================================== */

let musikSudahDimulai = false;

function mulaiMusik() {
const lagu = document.getElementById("laguKita");
const tombol = document.getElementById("tombolMusik");

if (!lagu) return;

// Jika lagu sudah berjalan, jangan mulai ulang.
if (musikSudahDimulai && !lagu.paused) return;

lagu.play()
    .then(() => {
        musikSudahDimulai = true;

        if (tombol) {
            tombol.textContent = "♫ Musik ON";
            tombol.setAttribute("aria-pressed", "true");
        }
    })
    .catch((error) => {
        console.warn("Musik belum bisa diputar:", error);
    });

}

function toggleMusik() {
const lagu = document.getElementById("laguKita");
const tombol = document.getElementById("tombolMusik");

if (!lagu) return;

if (lagu.paused) {
    lagu.play()
        .then(() => {
            musikSudahDimulai = true;

            if (tombol) {
                tombol.textContent = "♫ Musik ON";
                tombol.setAttribute("aria-pressed", "true");
            }
        })
        .catch((error) => {
            console.warn("Musik belum bisa diputar:", error);
        });
} else {
    lagu.pause();

    if (tombol) {
        tombol.textContent = "♫ Musik";
        tombol.setAttribute("aria-pressed", "false");
    }
}

}


/* ========================================
   TRANSISI ANTARHALAMAN
   ======================================== */

function gantiHalaman(kontenBaru) {
    const halaman = document.getElementById("halaman");

    if (!halaman) return;

    halaman.classList.remove("halaman-masuk");
    halaman.classList.add("halaman-keluar");

    setTimeout(() => {
        halaman.innerHTML = kontenBaru;

        halaman.classList.remove("halaman-keluar");
        halaman.classList.add("halaman-masuk");
    }, 450);
}

/* ========================================
   TAHAP 1: PEMBUKA
   ======================================== */

function mulaiKejutan() {
    mulaiMusik();

    gantiHalaman(`
        <div class="mawar">❤️</div>

        <p class="label">SEBELUM KITA MELANJUTKAN</p>

        <h1>Ayang, boleh tanya sesuatu?</h1>

        <p class="deskripsi">
            Dari sekian banyak orang di dunia,
            ternyata ada satu orang yang berhasil
            membuat hari-hariku terasa lebih berarti.
        </p>

        <p class="pertanyaan">
            Menurut Ayang, siapa orang itu?
        </p>

        <button onclick="jawabanBenar()">
            siapaa? ❤️
        </button>

        <p class="catatan">
            Coba jawab dengan percaya diri, ya.
        </p>
    `);
}

/* ========================================
   TAHAP 2: JAWABAN
   ======================================== */

function jawabanBenar() {
    gantiHalaman(`
        <div class="mawar">🥹❤️</div>

        <h1>Iya, Ayang!</h1>

        <p class="deskripsi">
            Tentu saja kamu.
            Kamu adalah salah satu alasan
            mengapa aku ingin membuat sesuatu
            yang istimewa hari ini.
        </p>

        <p class="pertanyaan">
            Tapi, ini baru permulaan.
            Masih ada kejutan lain untukmu.
        </p>

        <button onclick="bukaSurat()">
            Lanjutkan Kejutan 💌
        </button>
    `);
}

/* ========================================
   TAHAP 3: SURAT CINTA
   ======================================== */

function bukaSurat() {
    gantiHalaman(`
        <div class="mawar">💌</div>

        <p class="label">ADA SURAT UNTUKMU</p>

        <h1>Surat Kecilku</h1>

        <p class="deskripsi">
            Ayang, ada sesuatu yang ingin aku sampaikan.
            Mungkin tidak selalu mudah bagiku
            mengungkapkan semua perasaan melalui kata-kata.
        </p>

        <p class="pertanyaan">
            Jadi, kali ini izinkan aku menyampaikannya
            melalui surat kecil yang kubuat khusus untukmu.
        </p>

        <button onclick="bacaSurat()">
            Baca Suratnya ❤️
        </button>
    `);
}

/* ========================================
   TAHAP 4: ISI SURAT
   ======================================== */

function bacaSurat() {
    gantiHalaman(`
        <div class="mawar">🌹</div>

        <p class="label">DARI AKU, UNTUK AYANG</p>

        <h1>Untuk Kamu</h1>

        <p class="deskripsi">
            Terima kasih sudah menjadi bagian
            dari hari-hariku.
            Aku mungkin tidak selalu pandai
            menunjukkan perasaanku,
            tetapi aku ingin kamu tahu
            bahwa kehadiranmu begitu berarti bagiku.
        </p>

        <p class="pertanyaan">
            Ini baru awal dari kejutan kecilku.
            Masih ada pesan terakhir yang menunggumu.
        </p>

        <button onclick="pesanTerakhir()">
            Pesan Terakhir ❤️
        </button>
    `);
}

/* ========================================
   TAHAP 5: PENUTUP
   ======================================== */

function pesanTerakhir() {
    gantiHalaman(`
        <div class="mawar">❤️🌹</div>

        <p class="label">SEBUAH PESAN UNTUKMU</p>

        <h1>Aku Sayang Ayang</h1>

        <p class="deskripsi">
            Dari semua hal sederhana yang bisa kuberikan,
            kali ini aku memilih membuat sesuatu
            yang bisa kamu buka kapan saja
            untuk mengingat bahwa ada seseorang
            yang menyayangimu.
        </p>

        <p class="pertanyaan">
            Semoga saat kamu membaca ini,
            kamu bisa tersenyum sedikit lebih lama.
            Terima kasih sudah menjadi Ayangku.
        </p>

        <p class="catatan">
            Dengan sayang, dariku untukmu. ❤️
        </p>
    `);
}

/* ========================================
   ANIMASI KELOPAK MAWAR
   ======================================== */

function buatKelopak() {
    const kelopak = document.createElement("div");

    kelopak.classList.add("kelopak");
    kelopak.textContent = "🌹";

    kelopak.style.left = Math.random() * 100 + "vw";

    kelopak.style.fontSize =
        (12 + Math.random() * 14) + "px";

    const durasi = 7 + Math.random() * 5;

    kelopak.style.animationDuration = durasi + "s";

    document.body.appendChild(kelopak);

    setTimeout(() => {
        kelopak.remove();
    }, durasi * 1000);
}

/* Kelopak mulai muncul setelah halaman siap */
window.addEventListener("DOMContentLoaded", () => {
    setInterval(buatKelopak, 1500);
});