document.addEventListener("DOMContentLoaded", () => {
  const readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
      btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseout", () => {
      btn.style.transform = "scale(1)";
    });
  });
});

let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function moveSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) slideIndex = totalSlides - 1;
  if (slideIndex >= totalSlides) slideIndex = 0;
  updateSlidePosition();
}

function updateSlidePosition() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function autoSlide() {
  moveSlide(1);
  setTimeout(autoSlide, 8000); // đổi banner mỗi 5 giây
}

autoSlide();
  // Cuộn mượt toàn trang (fallback JS cho trình duyệt cũ)
  document.documentElement.style.scrollBehavior = 'smooth';

  const btn = document.getElementById('backToTop');
  const showAt = 300; // px

  window.addEventListener('scroll', () => {
    if (window.scrollY > showAt) btn.classList.add('show');
    else btn.classList.remove('show');
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

