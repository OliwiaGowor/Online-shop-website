import "./Home.css";

function Home() {

  function changePhoto(n) {
    var photos = document.querySelectorAll(".background-photo");
    var dots = document.querySelectorAll(".swipe-dot");

    if (n > photos.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = photos.length;
    }

    for (let i = 0; i < photos.length; i++) {
      photos[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
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

  return (
    <div class="home">
      <div class="home-container">
        <img class="background-photo" src="../../../photos/background-photo.jpg" />
        <img class="background-photo" src="photos/ales-nesetril-Im7lZjxeLhg-unsplash.jpg" />
        <img class="background-photo" src="photos/damian-zaleski-RYyr-k3Ysqg-unsplash.jpg" />
        <div class="gallery-arrows">
          <div class="arrow-left" onclick="plusIndex(-1)">
            <span class="upper"></span><span class="lower"></span>
          </div>
          <div class="arrow-right" onclick="plusIndex(1)">
            <span class="upper"></span><span class="lower"></span>
          </div>
        </div>
        <div class="swipe-dots">
          <span class="swipe-dot white-dot" onclick="currentPhoto(1)"></span>
          <span class="swipe-dot white-dot" onclick="currentPhoto(2)"></span>
          <span class="swipe-dot white-dot" onclick="currentPhoto(3)"></span>
        </div>
        <div class="home-content">
          <h1 class="home-header">Lorem Ipsum</h1>
          <p class="home-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, aperiam.
            Nam ratione ea sunt mollitia, non veniam porro voluptate eligendi consequuntur,
            id asperiores inventore voluptates. Possimus, dolore? Esse, natus minima?</p>
          <button class="button-shop-now">Shop now</button>

        </div>
      </div>
    </div>
  );
}

export default Home;
