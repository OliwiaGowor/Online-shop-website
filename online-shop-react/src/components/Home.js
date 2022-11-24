import React from "react";
import styles from "./Home.module.css";
import ImageSlider from "./ImageSlider";

function Home() {

  return (

    <div className={styles.home}>
      <ImageSlider />
      <div className={styles["home__content"]}>
          <h1 className={styles["home__header"]}>Lorem Ipsum</h1>
          <p className={styles["home__text"]}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, aperiam.
            Nam ratione ea sunt mollitia, non veniam porro voluptate eligendi consequuntur,
            id asperiores inventore voluptates. Possimus, dolore? Esse, natus minima?</p>
          <button className={styles["home__button-shop"]}>Shop now</button>
      </div>
    </div>
  );
}

export default Home;
