import "./PageNavLower.css";

function PageNavLower() {


    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".page-nav-lower").style.top = "58px";
        } else {
            document.querySelector(".page-nav-lower").style.top = "-59px";
        }
        prevScrollpos = currentScrollPos;
    };


    document.querySelector(".hamburger-icon-mobile").addEventListener("click", function () {
            this.classList.toggle("open");
            document.querySelector(".tabs").classList.toggle("open");
            document.querySelector(".tabs").classList.toggle("mobile");
        });

    var navElements = document.querySelectorAll(".tabs-elements");
    for (let i = 0; i < navElements.length; i++) {
        navElements[i].addEventListener("click", function () {
            document.querySelector(".hamburger-icon-mobile").classList.toggle("open");
            document.querySelector(".tabs").classList.remove("open");
            document.querySelector(".tabs").classList.remove("mobile");
        });
    }


    document.querySelector(".languages").addEventListener("click", function () {
        this.classList.toggle("open");
    });

    document.querySelector(".currency").addEventListener("click", function () {
        this.classList.toggle("open");
    });


    return (
        <div class="page-nav-lower">
            <div class="hamburger-icon-mobile">
                <span class="hamburger-icon-mobile-element"></span>
                <span class="hamburger-icon-mobile-element"></span>
                <span class="hamburger-icon-mobile-element"></span>
                <span class="hamburger-icon-mobile-element"></span>
                <span class="hamburger-icon-mobile-element"></span>
                <span class="hamburger-icon-mobile-element"></span>
            </div>
            <div class="tabs">
                <ul class="tabs-elements">
                    <li class="shop-nav">
                        <a href="">Shop</a>
                        <div class="dropdown-arrow"></div>
                        <div class="shop-dropdown">
                            <ul>
                                <li><a href="">Lorem ipsum</a></li>
                                <li><a href="">Lorem ipsum</a></li>
                                <li><a href="">Lorem ipsum</a></li>
                                <li><a href="">Lorem ipsum</a></li>
                                <li><a href="">Lorem ipsum</a></li>
                                <li><a href="">Lorem ipsum</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
            </div>
            <span class="nav-lower-space"></span>
            <div class="settings">
                <ul class="settings-elements">
                    <li class="languages">
                        <p>PL</p>
                        <div class="dropdown-arrow">
                            <span></span><span></span>
                        </div>
                        <div class="languages-dropdown">
                            <ul>
                                <li>ENG</li>
                            </ul>
                        </div>
                    </li>
                    <li class="currency">
                        <p>PLN</p>
                        <div class="dropdown-arrow">
                            <span></span><span></span>
                        </div>
                        <div class="currency-dropdown">
                            <ul>
                                <li>EUR</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PageNavLower;
