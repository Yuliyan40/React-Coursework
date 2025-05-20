import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./elements";
//import logo from "../../pages/teecraze.png";
import "../../pages/shirts.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h2>TeeCraze</h2>
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

          {user ? (
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {user.name}
            </NavLink>
          ) : (
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Регистрирай се
            </NavLink>
          )}
        </NavMenu>

        <NavBtn>
          {user ? (
            <NavBtnLink as="button" onClick={handleLogout}>
              Излез
            </NavBtnLink>
          ) : (
            <NavBtnLink to="/login">Влез</NavBtnLink>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
