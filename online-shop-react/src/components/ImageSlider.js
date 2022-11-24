
import React, { useState } from "react";
import styles from "./ImageSlider.module.css";
import photo1 from "../photos/background-photo.jpg"

const ImageSlider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { url: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg', title: "beach" },
    { url: photo1, title: "boat" },
    { url: "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863", title: "forest" },
    { url: photo1, title: "boat" }
  ];

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const currentSlide = (n) => {
    setCurrentIndex(n);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={styles["image-slider"]}>
      <img className={styles["background-photo"]} src={slides[currentIndex].url}/>
      <div className={styles["image-slider__arrows"]}>
        <div className={styles["arrow-left"]} onClick={prevSlide}>
          <span className={styles["upper"]}></span><span className={styles["lower"]}></span>
        </div>
        <div className={styles["arrow-right"]} onClick={nextSlide}>
          <span className={styles["upper"]}></span><span className={styles["lower"]}></span>
        </div>
      </div>
      <div className={styles["image-slider__dots"]}>
        {slides.map((slide, slideIndex) => (
          <div
            className={styles["swipe-dot"]}
            key={slideIndex}
            onClick={() => currentSlide(slideIndex)}
          >
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;