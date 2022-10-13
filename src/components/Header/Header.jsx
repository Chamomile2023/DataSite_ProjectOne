import React from "react";
import "./Header.scss";

const Header = () => {
    return <>
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
                            <h1 className="header__logo--logo">LYT</h1>
                            <p className="header__logo--words">Stay with us!</p>
                        </div>
                        <div className="header__buttons">
                            <div className="header__button--register">Registration</div>
                            <div className="header__button--login">Log in</div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </>;
};

export default Header;
