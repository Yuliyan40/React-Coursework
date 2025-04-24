import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./elements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink
            to="/metal"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Метъл
          </NavLink>
          <NavLink
            to="/tvf"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ТВ и филми
          </NavLink>
          <NavLink
            to="/games"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Игри
          </NavLink>
          <NavLink
            to="/anime"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Аниме
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Регистрирай се
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/log">Влез</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
