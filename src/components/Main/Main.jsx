import React from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__hero">
            <h1 className="main__hero--title">Top Users:</h1>
            <div className="main__cards">
              <div className="main__card">
                <div className="main__img">
                  <img
                    src="https://reqres.in/img/faces/1-image.jpg"
                    alt="person"
                    className="main__img--img"
                  />
                </div>
                <div className="main__name">George Bluth</div>
                <div className="main__email">
                  <p className="main__email--email">
                    Email: george.bluth@reqres.in
                  </p>
                </div>
                <Button className="main__btn">See more</Button>
              </div>
              <div className="main__card">
                <div className="main__img">
                  <img
                    src="https://reqres.in/img/faces/2-image.jpg"
                    alt="person"
                    className="main__img--img"
                  />
                </div>
                <div className="main__name">Janet Weaver</div>
                <div className="main__email">
                  <p className="main__email--email">
                    Email: emma.wong@reqres.in
                  </p>
                </div>
                <Button className="main__btn">See more</Button>
              </div>
              <div className="main__card">
                <div className="main__img">
                  <img
                    src="https://reqres.in/img/faces/3-image.jpg"
                    alt="person"
                    className="main__img--img"
                  />
                </div>
                <div className="main__name">Emma Wong</div>
                <div className="main__email">
                  <p className="main__email--email">
                    Email: eve.holt@reqres.in
                  </p>
                </div>
                <Button className="main__btn">See more</Button>
              </div>
              <div className="main__card">
                <div className="main__img">
                  <img
                    src="https://reqres.in/img/faces/4-image.jpg"
                    alt="person"
                    className="main__img--img"
                  />
                </div>
                <div className="main__name">Eve Holt</div>
                <div className="main__email">
                  <p className="main__email--email">
                    Email: emma.wong@reqres.in
                  </p>
                </div>
                <Button className="main__btn">See more</Button>
              </div>
            </div>
          </div>
          <NavLink to="/users">
            <Button className="user__all">All users</Button>
          </NavLink>
          <div className="main__basic">
            <div className="main__hero">
              <h1 className="main__hero--title">Top Unknown:</h1>
              <div className="main__cards">
                <div className="main__card">
                  <div className="main__img">
                    <div className="main--circle one"></div>
                  </div>
                  <div className="main__name ">Color: #990223</div>
                  <div className="main__email">
                    <p className="main__email--email">Year: 2023</p>
                    <p className="main__email--email">Pantone value: 17-2031</p>
                  </div>
                  <Button className="main__btn">See more</Button>
                </div>
                <div className="main__card">
                  <div className="main__img">
                    <div className="main--circle two"></div>
                  </div>
                  <div className="main__name">Color: #990223</div>
                  <div className="main__email">
                    <p className="main__email--email">Year: 2023</p>
                    <p className="main__email--email">Pantone value: 17-2031</p>
                  </div>
                  <Button className="main__btn">See more</Button>
                </div>
                <div className="main__card">
                  <div className="main__img">
                    <div className="main--circle three"></div>
                  </div>
                  <div className="main__name">Color: #990223</div>
                  <div className="main__email">
                    <p className="main__email--email">Year: 2023</p>
                    <p className="main__email--email">Pantone value: 17-2031</p>
                  </div>
                  <Button className="main__btn">See more</Button>
                </div>
                <div className="main__card">
                  <div className="main__img">
                    <div className="main--circle"></div>
                  </div>
                  <div className="main__name">Color: #990223</div>
                  <div className="main__email">
                    <p className="main__email--email">Year: 2023</p>
                    <p className="main__email--email">Pantone value: 17-2031</p>
                  </div>
                  <Button className="main__btn">See more</Button>
                </div>
              </div>
            </div>
            <NavLink to="/unknown">
              <Button className="user__all">All Unknown</Button>
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
