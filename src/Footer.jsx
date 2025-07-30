import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo-text">Your Website</h2>
          <p>
            Your website description goes here. It can include a brief introduction to your site and what you offer.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; +123-456-7890</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@yourwebsite.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Services</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </div>

        <div className="footer-section subscribe">
          <h2>Subscribe</h2>
          <p>Stay updated with our latest news and offers. Enter your email to subscribe to our newsletter.</p>
          <form>
            <input type="email" name="email" placeholder="Your email address" />
            <button className='f-button' type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 YourWebsite | Designed by You
      </div>
    </footer>
  );
};

export default Footer;
