import React from "react";
import "./Registration.scss";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Registration = () => {
  return (
    <>
      <div className="registration">
        <div className="container">
          <div className="registration__hero">
            <div className="login__hero">
              <h2 className="login__title">Sign up</h2>
              <input
                type="text"
                className="login__email"
                placeholder="Your email"
              />
              <input
                type="password"
                className="login__password"
                placeholder="Your password"
              />
              <input
                type="password"
                className="login__password"
                placeholder="Type password again"
              />
              <Button className="login__submit">Submit</Button>
              <div className="login__have">
                <p className="login__query">Have account yet? </p>
                <NavLink to="/sign-in" className="login__link">
                  Sign in.
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
