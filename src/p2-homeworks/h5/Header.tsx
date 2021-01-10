import React from "react";
import {NavLink} from "react-router-dom";
import s from "./HW5.module.css";

function Header() {
    return (
        <div>
            <nav className={s.navmenu}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/pre-junior"}>PreJunior</NavLink>
                <NavLink to={"/junior"}>Junior</NavLink>
                <NavLink to={"/juniorplus"}>JuniorPlus</NavLink>
            </nav>

        </div>
    );
}

export default Header;
