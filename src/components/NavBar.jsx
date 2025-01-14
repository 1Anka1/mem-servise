import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <>
      <nav className="nav-bar">
        <NavLink to="/hot" activeclassname="active">
          HOT
        </NavLink>
        <NavLink to="/regular" activeclassname="active">
          REGULAR
        </NavLink>
        <NavLink to="/saved" activeclassname="active">
          SAVED
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
