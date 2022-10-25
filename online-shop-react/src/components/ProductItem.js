import "./ProductItem.css";

function ProductItem() {
  return (
    <div class="product-item">
      <a>
        <img
          class="product-item__photo"
          src={"photos/michael-soledad-BKHHHJ1PD4g-unsplash.jpg"}
          width="300px"
          height="300px"
        />
      </a>
      <a class="product-item__wishlist">
        <img
          class="product-item__wishlist-icon"
          src={"icons/heart.png"}
          width="25px"
          height="25px"
        />
      </a>
      <div class="product-item__details">
        <h2 class="product-item__name">Lorem Ipsum</h2>
        <div class="product-item__price-tag">
          <p class="product-item__price">100.00</p>
          <p class="currency">zł</p>
        </div>
        <button class="product-item__cart-button">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductItem;
