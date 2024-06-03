const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const captions = document.querySelectorAll('.captions .caption');
const prevBtn = document.querySelector('.arrow.prev');
const nextBtn = document.querySelector('.arrow.next');
let currentIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  captions.forEach((caption, i) => {
    if (i === index) {
      caption.style.display = 'block';
    } else {
      caption.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(nextSlide, 15000);
