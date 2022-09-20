document.querySelector('.languages').addEventListener('click', function() {
	this.classList.toggle('open');
}); 

document.querySelector('.currency').addEventListener('click', function() {
	this.classList.toggle('open');
}); 


//slide dots change
function changePhoto(n) {
	var photos = document.querySelectorAll(".background-photo");
	var dots = document.querySelectorAll(".swipe-dot");

	if (n > photos.length) {slideIndex = 1}

	if (n < 1) {slideIndex = photos.length}

	for (i = 0; i < photos.length; i++) {
		photos[i].style.display = "none";  
	}

	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" white-dot", "");
	}
	
	photos[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " white-dot";
  }

var slideIndex = 1;
changePhoto(slideIndex);

function plusIndex(n) {
	changePhoto(slideIndex += n);
}

function currentPhoto(n) {
	changePhoto(slideIndex = n);
}

