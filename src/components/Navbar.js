import React,{ useState,useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { FiHome, FiInfo, FiBookOpen, FiHelpCircle } from 'react-icons/fi'; // Icons for links
import weblogo from '../assets/images/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility
  const dropdownRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <>
      <nav className={`navbar ${isFixed ? 'fixed-navbar' : ''}`}>
      <div className="navbar-logo-title">
          {/* Logo */}
          <Link to="/">
            <img src={weblogo} alt="Book Shop Logo" className="navbar-logo" />
          </Link>
          {/* Website Title */}
          <h1 className="navbar-title">Book Shop</h1>
      </div>
      <ul ref={dropdownRef}  className={`nav-links ${isOpen ? 'active' : ''}`}>
      <li>
          <Link to="/" onClick={closeDropdown}>
            <FiHome className="nav-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeDropdown}>
            <FiInfo className="nav-icon" /> About
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={closeDropdown}>
            <FiBookOpen className="nav-icon" /> Blog
          </Link>
        </li>
        <li>
          <Link to="/faq" onClick={closeDropdown}>
            <FiHelpCircle className="nav-icon" /> FAQ
          </Link>
        </li>
        <li><button className="nav-button2" onClick={closeDropdown}>Buy Book</button></li>
        <li><button className="nav-button2" onClick={closeDropdown}>Sign In</button></li>
      </ul>
      <div className="nav-buttons">
        <button className="nav-button1" onClick={closeDropdown}>Buy Book</button>
        <button className="nav-button1" onClick={closeDropdown}>Sign In</button>
      </div>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`}>
         {/* Hamburger or Cross Icon */}
          {isOpen ? (
            <FaTimes color="#7D4F4A" size={30} className="icon close-icon" onClick={toggleMenu} />
          ) : (
            <FaBars color="#7D4F4A" size={30} className="icon hamburger-icon" onClick={toggleMenu} />
          )}
      </div>
      
    </nav>
     {/* Translucent overlay */}
     {isOpen && <div className="dropdown-overlay" onClick={closeDropdown}></div>}
    </>
   
  );
};

export default Navbar;
