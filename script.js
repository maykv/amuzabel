let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add('active');
}

setInterval(showNextSlide, 3000);
