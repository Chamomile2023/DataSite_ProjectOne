import React from "react";
import Button from "../Button/Button";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__hero">
            <nav className="header__nav">
              <div className="header__toggle">
                <div className="header__circle">
                  <div className="header__circle--span"></div>
                  <div className="header__circle--span1"></div>
                  <div className="header__circle--span"></div>
                </div>
              </div>
              <div className="header__logo">
                <h2 className="header__logo--logo">LYT</h2>
                <p className="header__logo--words">Stay with us!</p>
              </div>
              <div className="header__buttons">
                <button className="header__buttons--register">
                  Registration
                </button>
                <Button className="header__buttons--login">Log in</Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
