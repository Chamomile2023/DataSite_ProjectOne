import React, { useState } from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = ({ setShow }) => {
  const toggle = () => {
    return setShow((e) => !e);
  };
  return (
    <>
      <div className="header">
        <header className="header__out">
          <div className="container">
            <div className="header__hero">
              <nav className="header__nav">
                <div className="header__toggle" onClick={() => toggle()}>
                  <div className="header__circle">
                    <div className="header__circle--span"></div>
                    <div className="header__circle--span1"></div>
                    <div className="header__circle--span"></div>
                  </div>
                </div>
                <div className="header__logo">
                  <NavLink to="/">
                    {" "}
                    <h2 className="header__logo--logo">LYT</h2>
                    <p className="header__logo--words">Stay with us!</p>
                  </NavLink>
                </div>
                <div className="header__buttons">
                  <button className="header__buttons--register">
                    <NavLink to="/sign-up" className="NavLink">
                      Registration
                    </NavLink>
                  </button>
                  <Button className="header__buttons--login">
                    <NavLink to="/sign-in" className="NavLink1">
                      Log in
                    </NavLink>
                  </Button>
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
