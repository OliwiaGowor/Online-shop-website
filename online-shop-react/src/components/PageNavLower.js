import React from "react";
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

    function hamburgerClickHandler() {
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
    }

    function languagesClickHandler() {
        document.querySelector(".languages").addEventListener("click", function () {
            this.classList.toggle("open");
        });
    }

    function currencyClickHandler() {
        document.querySelector(".currency").addEventListener("click", function () {
            this.classList.toggle("open");
        });
    }

    return (
        <div className="page-nav-lower">
            <div className="hamburger-icon-mobile" onClick="hamburgerClickHandler()">
                <span className="hamburger-icon-mobile-element"></span>
                <span className="hamburger-icon-mobile-element"></span>
                <span className="hamburger-icon-mobile-element"></span>
                <span className="hamburger-icon-mobile-element"></span>
                <span className="hamburger-icon-mobile-element"></span>
                <span className="hamburger-icon-mobile-element"></span>
            </div>
            <div className="tabs">
                <ul className="tabs-elements">
                    <li className="shop-nav">
                        <a href="">Shop</a>
                        <div className="dropdown-arrow"></div>
                        <div className="shop-dropdown">
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
            <span className="nav-lower-space"></span>
            <div className="settings">
                <ul className="settings-elements">
                    <li className="languages" onClick="languagesClickHandler">
                        <p>PL</p>
                        <div className="dropdown-arrow">
                            <span></span><span></span>
                        </div>
                        <div className="languages-dropdown">
                            <ul>
                                <li>ENG</li>
                            </ul>
                        </div>
                    </li>
                    <li className="currency" onClick="currencyClickHandler">
                        <p>PLN</p>
                        <div className="dropdown-arrow">
                            <span></span><span></span>
                        </div>
                        <div className="currency-dropdown">
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
