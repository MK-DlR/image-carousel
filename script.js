// script.js

let slideIndex = 1;
let slideTimer;

// initialize slideshow
showSlides(slideIndex);
startAutoSlide();

// start auto slideshow
function startAutoSlide() {
  slideTimer = setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);
  }, 5000);
}

// stop auto slideshow
function stopAutoSlide() {
  clearInterval(slideTimer);
}

// reset auto slideshow
function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// next/previous controls
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
  resetAutoSlide();
}

// thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
  resetAutoSlide();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
