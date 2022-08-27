import React, { useState } from 'react';
import '@styles/ProductItem.scss';

import addToCard from "@icons/bt_add_to_cart.svg";

const productItemImg = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";


const ProductItem = () => {
    const [card, setCard] = useState([])

    const handleClick = ()=> {
      setCard([]);
    }

    return (
        <div className="ProductItem">
        <img src={productItemImg} alt="" />
        <div className="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure onClick={handleClick}>
            <img src={addToCard} alt="" />
          </figure >
        </div>
      </div>
    );
};

export default ProductItem;