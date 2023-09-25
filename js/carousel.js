const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = carouselSlide.querySelectorAll("img");

let counter = 1;
const slideWidth = carouselImages[0].clientWidth;

function nextSlide() {
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

  if (counter >= carouselImages.length - 1) {
    setTimeout(() => {
      carouselSlide.style.transition = "none";
      counter = 1;
      carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }, 500);
  }
}

function prevSlide() {
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

  if (counter <= 0) {
    setTimeout(() => {
      carouselSlide.style.transition = "none";
      counter = carouselImages.length - 2;
      carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }, 500);
  }
}

setInterval(nextSlide, 3000);
