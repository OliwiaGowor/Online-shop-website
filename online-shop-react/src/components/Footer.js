import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer>
        <div class="footer-container">
            <div class="hyperlinks">
                <div class="informations">
                    <h1 class="informations-header">Informations</h1>
                    <ul class="informations-elements">
                        <li class="informations-element"><a href="">Lorem ipsum</a></li>
                        <li class="informations-element"><a href="">Lorem ipsum</a></li>
                        <li class="informations-element"><a href="">Lorem ipsum</a></li>
                        <li class="informations-element"><a href="">Lorem ipsum</a></li>
                    </ul>
                </div>
                <div class="users-account">
                    <h1 class="account-header">Your account</h1>
                    <ul class="account-elements">
                        <li class="account-element"><a href="">Lorem ipsum</a></li>
                        <li class="account-element"><a href="">Lorem ipsum</a></li>
                        <li class="account-element"><a href="">Lorem ipsum</a></li>
                        <li class="account-element"><a href="">Lorem ipsum</a></li>
                    </ul>
                </div>
                <div class="contact">
                    <h1 class="contact-header">Contact us</h1>
                    <ul class="contact-elements">
                        <li class="contact-element"><a href="">Lorem ipsum</a></li>
                        <li class="contact-element"><a href="">Lorem ipsum</a></li>
                        <li class="contact-element"><a href="">Lorem ipsum</a></li>
                        <li class="contact-element"><a href="">Lorem ipsum</a></li>
                    </ul>
                </div>
            </div>
                <div class="newsletter">
                    <div class="newsletter-text">
                        <h1 class="newsletter-header">Sign up for the Newsletter!</h1>
                        <p class="newsletter-description">Subscribe to our newsletter be up-to-date with newest sales and get exclusive member deals!</p>
                    </div>
                    <form class="newsletter-input">
                        <input type="email" class="email-input" placeholder="Enter your e-mail"/>
                        <button class="subscribe-button">Subscribe!</button>
                    </form>
                </div>
            
        </div>
    </footer>
  );
}

export default Footer;
