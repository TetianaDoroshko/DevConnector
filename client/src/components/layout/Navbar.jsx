import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <NavLink to="/"> DevConnector</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/developers">Developers</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
