import React, { useContext } from "react";
import "@styles/Header.scss";

import Menu from "@components/Menu";
import MobileMenu from "@components/MobileMenu";
import MyOrder from "@containers/MyOrder";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";


import AppContext from "../context/AppContext";

const Header = () => {
  const { state, toggleOrders, toggleMenu, toggleMenuMobile , changeToggle  } = useContext(AppContext);
  const handleToggle = toggle => {
    changeToggle(toggle);
  };
  return (
    <nav>
      <img src={menu} alt="menu" className="menu" onClick={() => handleToggle("menu-mobile")} />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={() => handleToggle("menu")}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => handleToggle("cart")}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggleMenuMobile && <MobileMenu />}
      {toggleMenu && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
