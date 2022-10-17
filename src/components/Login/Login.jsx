import React from "react";
import "./Login.scss";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="login__hero">
            <h2 className="login__title">Sign in</h2>
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
            <Button className="login__submit">Submit</Button>
            <div className="login__have">
              <p className="login__query">Don't have account yet? </p>
              <NavLink to="/sign-in" className="login__link">
                Sign up.
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
