let slideIndex = 0;
const slides = document.querySelector(".slides");

function showSlides() {
    slideIndex++;
    if (slideIndex >= slides.children.length) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// setInterval(showSlides, 1000);
