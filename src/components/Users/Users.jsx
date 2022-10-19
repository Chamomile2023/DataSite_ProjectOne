import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./Users.scss";

const Users = ({ data }) => {
  return (
    <>
      <div className="users">
        <div className="container">
          {
            <div className="users__hero">
              {data.slice(0, 6).map((item) => {
                return (
                  <div className="main__card" key={item.id} id={item.id}>
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
                      <p className="main__email--email">Email: {item?.email}</p>
                    </div>
                    <NavLink to={`/users/${item?.id}`}>
                      <Button className="main__btn">See more</Button>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          }
          <Button
            onClick={() => {
              showMore;
            }}
            className="users__load"
          >
            Load More
          </Button>
        </div>
      </div>
    </>
  );
};

export default Users;
