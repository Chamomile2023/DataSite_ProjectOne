import React from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Main.scss";

const Main = ({ data }) => {
  // const [id, setId] = useState([]);
  // const getIdData = async () => {
  //   const request = await fetch(`https://reqres.in/api/users/${id}`);
  //   const response = await request.json();
  //   setId(response);
  // };
  // useEffect(() => {
  //   getIdData();
  // }, []);

  const [colorData, setColorData] = useState([]);
  const ColorData = async () => {
    const request = await fetch(`https://reqres.in/api/unknown`);
    const response = await request.json();
    setColorData(response.data);
  };
  useEffect(() => {
    ColorData();
  }, []);
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__hero">
            <h1 className="main__hero--title">Top Users:</h1>
            <div className="main__cards">
              {data.slice(0, 4).map((item) => {
                return (
                  <div className="main__card" key={item.id}>
                    <div className="main__img">
                      <img
                        src={item?.avatar}
                        alt="person"
                        className="main__img--img"
                      />
                    </div>
                    <div className="main__name">
                      {item?.first_name + " " + item?.last_name}
                    </div>
                    <div className="main__email">
                      <p className="main__email--email">{item?.email}</p>
                    </div>
                    <NavLink to={`/users/${item?.id}`}>
                      <Button className="main__btn">See more</Button>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
          <NavLink to="/users">
            <Button className="user__all">All users</Button>
          </NavLink>
          <div className="main__basic">
            <div className="main__hero">
              <h1 className="main__hero--title">Top Unknown:</h1>
              <div className="main__cards">
                {colorData.slice(0, 4).map((element) => {
                  return (
                    <div className="main__card" key={element.id}>
                      <div className="main__img">
                        <div
                          className="main--circle"
                          style={{ backgroundColor: element?.color }}
                        ></div>
                      </div>
                      <div className="main__name ">Color: {element?.color}</div>
                      <div className="main__email">
                        <p className="main__email--email">
                          Year: {element?.year}
                        </p>
                        <p className="main__email--email">
                          Pantone value: {element?.pantone_value}
                        </p>
                      </div>
                      <NavLink to={`/unknown/${element?.id}`}>
                        <Button className="main__btn">See more</Button>
                      </NavLink>
                    </div>
                  );
                })}
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
