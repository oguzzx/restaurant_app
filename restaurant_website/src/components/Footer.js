import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p> © 2022 burger33.com </p>
        <FaInstagram />
        <FaFacebook />
        <FaTwitter />
      </div>
    </div>
  );
}

export default Footer;
