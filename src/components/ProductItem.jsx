import React, { useContext, useState } from "react";
import "@styles/ProductItem.scss";
import AppContext from "../context/AppContext";

import addToCard from "@icons/bt_add_to_cart.svg";
import addedToCard from "@icons/bt_added_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart, state } = useContext(AppContext);

  const handleCheck = (item) => {
    return state.cart.some((item) => item.id === product.id);
  };

  const handleClick = (item) => {
    handleCheck(item) ? removeFromCart(item) : addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>{product.price}$</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={handleCheck() ? addedToCard : addToCard} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
