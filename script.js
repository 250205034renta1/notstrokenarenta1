
// ===================================
// VALIDASI FORMULIR KONSULTASI
// ===================================

const form = document.getElementById("consultForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const telepon = document.getElementById("telepon").value.trim();
    const topik = document.getElementById("topik").value;
    const pesan = document.getElementById("pesan").value.trim();

    const status = document.getElementById("formStatus");

    status.style.color = "#c90043";

    if (nama.length < 3) {
        status.textContent = "Nama harus terdiri dari minimal 3 karakter.";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = "Masukkan alamat email yang benar.";
        return;
    }

    if (!/^[0-9+\-\s]{9,16}$/.test(telepon)) {
        status.textContent = "Masukkan nomor telepon yang valid.";
        return;
    }

    if (topik === "") {
        status.textContent = "Silakan pilih topik konsultasi.";
        return;
    }

    if (pesan.length < 10) {
        status.textContent = "Pesan minimal harus 10 karakter.";
        return;
    }

    status.style.color = "#087e78";
    status.textContent =
        "Validasi berhasil! Formulir berhasil diperiksa, tetapi belum dikirim ke server.";

    form.reset();
});


// ===================================
// NAVIGASI MENU AKTIF
// ===================================

const menuLinks = document.querySelectorAll("nav a, .quickbar a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const target = this.getAttribute("href");

        menuLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        document.querySelectorAll(`a[href="${target}"]`)
            .forEach(function(item) {
                item.classList.add("active");
            });
    });
});


// ===================================
// TOMBOL KEMBALI KE ATAS
// ===================================

window.addEventListener("scroll", function() {

    const currentPosition = window.scrollY;

    document.querySelectorAll("main section[id]").forEach(function(section) {

        const top = section.offsetTop - 160;
        const bottom = top + section.offsetHeight;

        if (currentPosition >= top && currentPosition < bottom) {

            const currentId = section.getAttribute("id");

            menuLinks.forEach(function(link) {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + currentId
                );
            });
        }
    });
});
// JavaScript Document