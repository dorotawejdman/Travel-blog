/********Setting overlay height according to site size********/
setOverlayHeight();
window.onresize = setOverlayHeight;
function setOverlayHeight(){
  var photo = document.querySelector(".intro-photo");
  var a = getComputedStyle(photo);
  var overlay = document.querySelector(".overlay");
  overlay.style.height = a.height;
  console.log(a.height);
}

//***********SLIDESHOW********************* */
var slideIndex = 0;
showSlidesAuto();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex=n-1);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length-1) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length-1}
  //ukryj wszystkie slajdy
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //zdezaktywuj wszystkie kropy
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //pokaz nty slajd i ntą kropę 
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

function showSlidesAuto() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var lastIndex = slides.length-1;
  //przestan wyswietlac slajdy
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > lastIndex) {slideIndex = 0;}

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex].className += " active";
  slides[slideIndex].style.display = "block";
  slideIndex++;
  
}
//setTimeout(showSlides, 4000); 
setInterval(showSlidesAuto,2000);



//***************AOS ANIMATIONS************ */
AOS.init();



