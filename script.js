//hamburger icon opening
document
  .querySelector(".hamburger-icon-mobile")
  .addEventListener("click", function () {
    this.classList.toggle("open");
    document.querySelector(".tabs").classList.toggle("open");
    document.querySelector(".tabs").classList.toggle("mobile");
  });

var navElements = document.querySelectorAll(".tabs-elements");
for (i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("click", function () {
    document.querySelector(".hamburger-icon-mobile").classList.toggle("open");
    document.querySelector(".tabs").classList.remove("open");
    document.querySelector(".tabs").classList.remove("mobile");
  });
}

//settings opening
document.querySelector(".languages").addEventListener("click", function () {
  this.classList.toggle("open");
});

document.querySelector(".currency").addEventListener("click", function () {
  this.classList.toggle("open");
});

//slide dots change
function changePhoto(n) {
  var photos = document.querySelectorAll(".background-photo");
  var dots = document.querySelectorAll(".swipe-dot");

  if (n > photos.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = photos.length;
  }

  for (i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" white-dot", "");
  }

  photos[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " white-dot";
}

var slideIndex = 1;
changePhoto(slideIndex);

function plusIndex(n) {
  changePhoto((slideIndex += n));
}

function currentPhoto(n) {
  changePhoto((slideIndex = n));
}

//lower navbar changing on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".page-nav-lower").style.top = "58px";
  } else {
    document.querySelector(".page-nav-lower").style.top = "-59px";
  }
  prevScrollpos = currentScrollPos;
};
