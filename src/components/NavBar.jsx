import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <>
      <nav className="nav-bar">
        <NavLink
          to="/hot"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          HOT
        </NavLink>
        <NavLink
          to="/regular"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          REGULAR
        </NavLink>
        <NavLink
          to="/saved"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          SAVED
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
