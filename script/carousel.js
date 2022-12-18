let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// ------------------- Slide 2 -----------------
let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n2) {
  showSlides2(slideIndex2 += n2);
}

// Thumbnail image controls
function currentSlide2(n2) {
  showSlides2(slideIndex2 = n2);
}

function showSlides2(n2) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  if (n2 > slides2.length) {slideIndex2 = 1}
  if (n2 < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
}

// ------------------- SLIDE 3 ------------------
let slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n3) {
  showSlides3(slideIndex3 += n3);
}

// Thumbnail image controls
function currentSlide3(n3) {
  showSlides3(slideIndex3 = n3);
}

function showSlides3(n3) {
  let i;
  let slides3 = document.getElementsByClassName("mySlides3");
  let dots3 = document.getElementsByClassName("dot3");
  if (n3 > slides3.length) {slideIndex3 = 1}
  if (n3 < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
}

// ------------------- SLIDE 4 ------------------
let slideIndex4 = 1;
showSlides4(slideIndex4);

// Next/previous controls
function plusSlides4(n4) {
  showSlides4(slideIndex4 += n4);
}

// Thumbnail image controls
function currentSlide4(n4) {
  showSlides4(slideIndex4 = n4);
}

function showSlides4(n4) {
  let i;
  let slides4 = document.getElementsByClassName("mySlides4");
  let dots4 = document.getElementsByClassName("dot4");
  if (n4 > slides4.length) {slideIndex4 = 1}
  if (n4 < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  for (i = 0; i < dots4.length; i++) {
    dots4[i].className = dots4[i].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block";
  dots4[slideIndex4-1].className += " active";
}

// ------------------- SLIDE 5 ------------------
let slideIndex5 = 1;
showSlides5(slideIndex5);

// Next/previous controls
function plusSlides5(n5) {
  showSlides5(slideIndex5 += n5);
}

// Thumbnail image controls
function currentSlide5(n5) {
  showSlides5(slideIndex5 = n5);
}

function showSlides5(n5) {
  let i;
  let slides5 = document.getElementsByClassName("mySlides5");
  let dots5 = document.getElementsByClassName("dot5");
  if (n5 > slides5.length) {slideIndex5 = 1}
  if (n5 < 1) {slideIndex5 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }
  for (i = 0; i < dots5.length; i++) {
    dots5[i].className = dots5[i].className.replace(" active", "");
  }
  slides5[slideIndex5-1].style.display = "block";
  dots5[slideIndex5-1].className += " active";
}


// ------------------- SLIDE 6 ------------------
let slideIndex6 = 1;
showSlides6(slideIndex6);

// Next/previous controls
function plusSlides6(n6) {
  showSlides6(slideIndex6 += n6);
}

// Thumbnail image controls
function currentSlide6(n6) {
  showSlides6(slideIndex6 = n6);
}

function showSlides6(n6) {
  let i;
  let slides6 = document.getElementsByClassName("mySlides6");
  let dots6 = document.getElementsByClassName("dot6");
  if (n6 > slides6.length) {slideIndex6 = 1}
  if (n6 < 1) {slideIndex6 = slides6.length}
  for (i = 0; i < slides6.length; i++) {
    slides6[i].style.display = "none";
  }
  for (i = 0; i < dots6.length; i++) {
    dots6[i].className = dots6[i].className.replace(" active", "");
  }
  slides6[slideIndex6-1].style.display = "block";
  dots6[slideIndex6-1].className += " active";
}


// ------------------- SLIDE 7 ------------------
let slideIndex7 = 1;
showSlides7(slideIndex7);

// Next/previous controls
function plusSlides7(n7) {
  showSlides7(slideIndex7 += n7);
}

// Thumbnail image controls
function currentSlide7(n7) {
  showSlides7(slideIndex7 = n7);
}

function showSlides7(n7) {
  let i;
  let slides7 = document.getElementsByClassName("mySlides7");
  let dots7 = document.getElementsByClassName("dot7");
  if (n7 > slides7.length) {slideIndex7 = 1}
  if (n7 < 1) {slideIndex7 = slides7.length}
  for (i = 0; i < slides7.length; i++) {
    slides7[i].style.display = "none";
  }
  for (i = 0; i < dots7.length; i++) {
    dots7[i].className = dots7[i].className.replace(" active", "");
  }
  slides7[slideIndex7-1].style.display = "block";
  dots7[slideIndex7-1].className += " active";
}


// ------------------- SLIDE 8 ------------------
let slideIndex8 = 1;
showSlides8(slideIndex8);

// Next/previous controls
function plusSlides8(n8) {
  showSlides8(slideIndex8 += n8);
}

// Thumbnail image controls
function currentSlide8(n8) {
  showSlides8(slideIndex8 = n8);
}

function showSlides8(n8) {
  let i;
  let slides8 = document.getElementsByClassName("mySlides8");
  let dots8 = document.getElementsByClassName("dot8");
  if (n8 > slides8.length) {slideIndex8 = 1}
  if (n8 < 1) {slideIndex8 = slides8.length}
  for (i = 0; i < slides8.length; i++) {
    slides8[i].style.display = "none";
  }
  for (i = 0; i < dots8.length; i++) {
    dots8[i].className = dots8[i].className.replace(" active", "");
  }
  slides8[slideIndex8-1].style.display = "block";
  dots8[slideIndex8-1].className += " active";
}