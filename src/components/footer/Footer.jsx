import React from "react";
import Form from "../form/Form";


import "./footer.scss";

import vector1 from "./img/vector1.png";
import vector2 from "./img/vector2.png";
import letter1 from "./img/letter1.png";
import letter2 from "./img/letter2.png";
import phone from "./img/phone.png";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="navigation bottom-navigation">
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__list-item">
              <a className="menu__link" href="#">
                Preise
              </a>
            </li>
            <li className="menu__list-item">
              <a className="menu__link" href="#">
                Referenzen
              </a>
            </li>
            <li className="menu__list-item">
              <a className="menu__link" href="a">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="contacts">
        <div className="address">
          <div className="address-data">
            <div className="location">
              <span className="vector">
                <img className="vector-img-1" src={vector1} alt="" />
                <img className="vector-img-2" src={vector2} alt="" />
              </span>
              <p className="address-info">Poststr, 45, 44890 Hamburg</p>
            </div>
            <div className="email">
              <div className="location">
                <span className="vector">
                  <img className="letter-img-1" src={letter1} alt="letter" />
                  <img className="letter-img-2" src={letter2} alt="letter" />
                </span>
                <p className="address-info">HELLO@TRATATA.DE</p>
              </div>
            </div>
            <div className="phone">
              <div className="location">
                <span className="vector">
                  <img className="vector-img-1" src={phone} alt="phone" />
                </span>
                <p className="address-info">040 380-33-44</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us">
          <div className="contact-title">Schreiben Sie uns!</div>
          <Form />
        </div>
      </div>
      <div className="copyright">
        © 2019 Genius Web Agentur. Alle Rechte vorbehalten
      </div>
    </footer>
  );
};

export default Footer;
