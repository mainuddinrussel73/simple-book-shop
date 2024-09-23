import React from "react";
import '../styles/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>Not so Good Readers</h2>
            <p>
              Discover your next great read at Not so Good Readers. We offer a wide range of books from classics to the latest releases. Join our community of book lovers!
            </p>
            <div className="socials">
              <a><FaFacebookF /></a>
              <a><FaTwitter /></a>
              <a><FaInstagram /></a>
              <a ><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-section links">
            <h3 >Quick Links</h3>
            <ul>
              <li><a>Home</a></li>
              <li><a  >About</a></li>
              <li><a  >Blog</a></li>
              <li><a  >FAQ</a></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><strong>Address:</strong> 123 Book St, Fictional City, 45678</p>
            <p><strong>Email:</strong> info@notsogoodreaders.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          </div>
          <div className="footer-section subscribe">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay updated on new arrivals, promotions, and events. Sign up today!</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Book Shop | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
