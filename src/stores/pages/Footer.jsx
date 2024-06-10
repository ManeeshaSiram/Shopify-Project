import React from 'react';

import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Learn more about our company and mission.</p>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping Information</li>
            <li>Returns & Exchanges</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect With Us</h4>
            <FaSquareWhatsapp /> <br/>
            <FaInstagramSquare /> <br/>
            <FaTwitterSquare />
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Shopify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
