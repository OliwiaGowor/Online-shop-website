import "./PageNavUpper.css";

function PageNavUpper() {
  return (
    <div class="page-nav-upper">
        <div class="page-logo"><a href="">LOGO</a></div>
        <div class="search-bar">
            <input type="text" class="search-bar-input" placeholder="Search..." />
            <img class="search-icon" src="icons/search-icon.png" width="20px" height="20px" />
        </div>
        <span class="nav-upper-space"></span>
        <div class="right-icons">
            <ul class="right-icons-elements">
                <li><a href=""><img class="account-icon" src="icons/account-icon.png" width="25px" height="25px"/></a></li>
                <li><a href=""><img class="wishlist-icon" src="icons/wishlist-icon.png" width="25px" height="25px"/></a></li>
                <li class="shopping-cart"> 
                    <a href=""><img class="shopping-cart-icon" src="icons/shopping-cart-icon.png" width="25px" height="25px"/></a>
                    <div class="shopping-cart-dropdown">
                        <h2 class="cart-header">Koszyk</h2>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default PageNavUpper;
