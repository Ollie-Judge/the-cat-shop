import React from "react";
import "../styling/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-box">
        <span className="catsLogo">
          <h2>Cats 4 Life</h2>
        </span>
        <div className="socialMedia">
          <ul>
            <li>
              <a href = "https://en-gb.facebook.com/" target = "_blank">Facebook</a>
            </li>
            <li>
              <a href = "https://twitter.com/?lang=en-gb" target = "_blank">Twitter</a>
            </li>
            <li>
              <a href = "https://www.instagram.com/" target = "_blank">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
