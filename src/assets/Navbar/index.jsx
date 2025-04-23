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
          <NavLink to="/metal" activeStyle>
            Метъл
          </NavLink>
          <NavLink to="/tvf" activeStyle>
            ТВ и филми
          </NavLink>
          <NavLink to="/games" activeStyle>
            Игри
          </NavLink>
          <NavLink to="/anime" activeStyle>
            Аниме
          </NavLink>
          <NavLink to="/register" activeStyle>
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
