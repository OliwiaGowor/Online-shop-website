import React from "react";
import "./PageNavUpper.css";

function PageNavUpper() {
  return (
    <div className="page-nav-upper">
        <div className="page-logo"><a href="">LOGO</a></div>
        <div className="search-bar">
            <input type="text" className="search-bar-input" placeholder="Search..." />
            <img className="search-icon" src="icons/search-icon.png" width="20px" height="20px" />
        </div>
        <span className="nav-upper-space"></span>
        <div className="right-icons">
            <ul className="right-icons-elements">
                <li><a href=""><img className="account-icon" src="icons/account-icon.png" width="25px" height="25px"/></a></li>
                <li><a href=""><img className="wishlist-icon" src="icons/wishlist-icon.png" width="25px" height="25px"/></a></li>
                <li className="shopping-cart"> 
                    <a href=""><img className="shopping-cart-icon" src="icons/shopping-cart-icon.png" width="25px" height="25px"/></a>
                    <div className="shopping-cart-dropdown">
                        <h2 className="cart-header">Koszyk</h2>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default PageNavUpper;
