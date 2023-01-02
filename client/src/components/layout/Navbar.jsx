import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/operations(thunks)/auth/logout";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";

export const Navbar = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    console.log("logout click");
    dispatch(logout());
  };

  return (
    <nav className="navbar bg-dark">
      <h1>
        <NavLink to="/"> DevConnector</NavLink>
      </h1>
      {isAuthenticated && (
        <ul>
          <li>
            <NavLink to="/profiles">Developers</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">
              <FaUserAlt style={{ marginRight: "5px" }} />{" "}
              <span className="hide-sm">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#" onClick={logoutHandler}>
              <FaSignOutAlt style={{ marginRight: "5px" }} />{" "}
              <span className="hide-sm">Logout</span>
            </NavLink>
          </li>
        </ul>
      )}
      {!isAuthenticated && (
        <ul>
          <li>
            <NavLink to="/profiles">Developers</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
