import React from "react";
import "./ProductItem.css";

function ProductItem() {
  return (
    <div className="product-item">
      <a>
        <img
          className="product-item__photo"
          src={"photos/michael-soledad-BKHHHJ1PD4g-unsplash.jpg"}
          width="300px"
          height="300px"
        />
      </a>
      <a className="product-item__wishlist">
        <img
          className="product-item__wishlist-icon"
          src={"icons/heart.png"}
          width="25px"
          height="25px"
        />
      </a>
      <div className="product-item__details">
        <h2 className="product-item__name">Lorem Ipsum</h2>
        <div className="product-item__price-tag">
          <p className="product-item__price">100.00</p>
          <p className="currency">zł</p>
        </div>
        <button className="product-item__cart-button">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductItem;
