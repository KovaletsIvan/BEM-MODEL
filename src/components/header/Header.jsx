import React from "react";

import "./header.scss";
import logo from "./tipss-2.jpeg";

const Header = () => {
  return (
    <div className="heade">
      <div className="header-top">
        <div className="logo">
          <a className="logo-link" href="#">
            GENIUS
          </a>
        </div>
        <div className="navigation top-navigation">
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
        <div className="language">
          <select className="header-selector" name="language">
            <option value="en" className="header-selector__language">
              EN
            </option>
            <option value="uk" className="header-selector__language">
              UK
            </option>
            <option value="sp" className="header-selector__language">
              SP
            </option>
            <option value="pl" className="header-selector__language">
              PL
            </option>
          </select>
        </div>
      </div>
      <div className="header-image">
        <img className="image" src={logo} alt="img" />
      </div>
    </div>
  );
};
export default Header;
