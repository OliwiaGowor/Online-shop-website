import React from 'react';
import "./NewProducts.css";
import ProductItem from "./ProductItem";

function NewProducts() {
  return (
    <div className="new-products">
      <h1 className="new-products__header">New products</h1>
      <div className="new-products__elements">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

export default NewProducts;
