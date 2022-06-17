import React from "react";
import "../styling/footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-box">
        <span className="catsLogo">
          <h2>Cats 4 Life</h2>
        </span>
        
        <div className="socialMedia">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
