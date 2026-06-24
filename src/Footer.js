import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-logo">
          🔥 Free Fire Zone
          <p>
            The ultimate gaming platform for Free Fire players.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>


        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📧 support@freefirezone.com</p>
          <p>🎮 Gaming Support 24/7</p>
          <p>🌎 India</p>
        </div>

      </div>


      <div className="copyright">
        © 2026 Free Fire Zone | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;