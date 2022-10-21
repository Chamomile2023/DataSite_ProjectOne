import React, { useState } from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = ({ setShow, show }) => {
  console.log(show);
  return (
    <>
      <div className="header">
        <header className="header__out">
          <div className="container">
            <div className="header__hero">
              <nav className="header__nav">
                <div className="header__toggle" onClick={() => setShow(true)}>
                  <div className={`header__circle `}>
                    <div className="header__circle--span"></div>
                    <div className="header__circle--span1"></div>
                    <div className="header__circle--span"></div>
                  </div>
                </div>
                <div className="header__logo">
                  <NavLink to="/">
                    <h2 className="header__logo--logo">LYT</h2>
                    <p className="header__logo--words">Stay with us!</p>
                  </NavLink>
                </div>
                <div className="header__buttons">
                  <NavLink to="/profile" className="header__buttons--btn">
                    <Button className="header__buttons--login">
                      <i class="fa-regular fa-user"></i>
                    </Button>
                  </NavLink>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
