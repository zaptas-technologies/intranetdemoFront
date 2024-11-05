import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* First Column - About */}
          <div className="col-md-3">
            <h5>About</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printingand typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s.
            </p>
            <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Second Column - Links */}
          <div className="col-md-3">
            <h5>Our Businesses</h5>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Third Column - Links */}
          <div className="col-md-3">
            <h5>Who Are We</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>

          {/* Fourth Column - Links */}
          <div className="col-md-3">
            <h5>Sustainability</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Contact Support</a>
              </li>
              <li>
                <a href="#">Report a Problem</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="footer-bottom text-center mt-4">
          <p>&copy; 2024 Garware Hi Tech Films Limited. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
