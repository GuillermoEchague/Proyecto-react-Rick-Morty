import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__made">
      Made with{" "}
      <span role="img" aria-label="heart">
        💜
      </span>{" "}
      by
      <a
            href="https://www.linkedin.com/in/guillermo-echag%C3%BCe-arriaza-a198b2192/"
            rel="noopener noreferrer"
            target="_blank"
            className="logo"
          >
            <span className="logo-img">&lt;&gt;</span>
            {' '}
            <span>Guillermo Echagüe</span>
            </a>
            </div>
            <div className="footer__location">
              CH,
              <span>Santiago</span>
            ,2021
        </div>
</footer>
)

export default Footer;