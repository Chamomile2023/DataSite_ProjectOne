import React, { useState } from "react";
import "./RealSidebar.scss";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const RealSidebar = ({ data }) => {
  //Search
  const [search, setSearch] = useState();
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__basic">
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass sidebar__two--icon"></i>
            </div>
            <div className="sidebar__three">
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <Button className="sidebar__three--btn">Users</Button>
              </NavLink>
              <NavLink
                to="/unknown"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <Button className="sidebar__three--btn">Unknown</Button>
              </NavLink>
            </div>
          </div>
          <div className="sidebar__right">
            <div className="sidebar__right--right"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealSidebar;
