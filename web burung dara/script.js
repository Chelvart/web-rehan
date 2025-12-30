// Animasi muncul (Fade In) saat scroll
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
  });
});

// Fungsi Pop-up Modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgFull");
const span = document.getElementsByClassName("close")[0];

// Ambil semua gambar di galeri
document.querySelectorAll(".gallery-img").forEach((image) => {
  image.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
});

// Klik tombol (x) untuk menutup
if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  };
}

// Klik di mana saja di luar gambar untuk menutup
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
