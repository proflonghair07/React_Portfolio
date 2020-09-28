import React from "react";
import "./Style.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-dark" id="footer-text">
          Copyright &copy; Omniclause
          <span className="footer-links">
            <a href="https://github.com/proflonghair07" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://linkedin.com/in/murphy-vaughn-a256881a4"
              target="_blank"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="tel:615-457-0185">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
}
export default Footer;
