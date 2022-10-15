import React from "react";
import "./SideBar.scss";
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const SideBar = () => {
    return <>
        <div className="sidebar">
            <div className="sidebar__left">
                <div className="sidebar__category">
                    <h2 className="sidebar__category--title">Category</h2>
                    <Button className="sidebar__category--span">X</Button>
                </div>
                <div className="sidebar__input">
                    <input type="text" className="sidebar__input--input" placeholder="Search" />
                    <i class="fa-solid fa-magnifying-glass sidebar__input--search"></i>
                </div>
                <div className="sidebar__users">
                    <NavLink to="/users" className="sidebar__users--user">Users</NavLink>
                    <NavLink to="/unknown" className="sidebar__users--user">Unknown</NavLink>
                </div>
            </div>
            <div className="sidebar__right"></div>
        </div>
    </>;
};

export default SideBar;
