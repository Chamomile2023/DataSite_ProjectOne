import React from "react";
import "./RealSidebar.scss";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const RealSidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__hero">
          <div className="sidebar__one">
            <h2 className="sidebar__one--title">Category</h2>
            <Button>X</Button>
          </div>
          <div className="sidebar__two">
            <input
              type="text"
              placeholder="Search"
              className="sidebar__two--input"
            />
            <i className="fa-solid fa-magnifying-glass sidebar__two--icon"></i>
          </div>
          <div className="sidebar__three">
            <NavLink to="/users">
              <Button className="sidebar__three--btn">Users</Button>
            </NavLink>
            <NavLink to="/unknown">
              {" "}
              <Button className="sidebar__three--btn">Unknown</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealSidebar;
