//Image slider

const slides = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalId = null;

// initializeSlider() 
document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider() {
  if(slides.length > 0){
slides[slideIndex].classList.add("displaySlide");
  intervalId = setInterval(nextSilde, 5000);
  } 
}

function showSlide(index) {

  if(index >= slides.length){
slideIndex = 0;
  }
  else if(index < 0){
    slideIndex = slides.length - 1;
  }

slides.forEach(slide => {
  slide.classList.remove("displaySlide");
});
slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId)
slideIndex--;
showSlide(slideIndex);
}


function nextSilde() {
slideIndex++;
showSlide(slideIndex);
}