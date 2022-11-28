import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/operations(thunks)";

export const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar bg-dark">
      <h1>
        <NavLink to="/"> DevConnector</NavLink>
      </h1>
      <ul>
        {isAuthenticated && !loading && (
          <li>
            <NavLink to="#" onClick={logoutHandler}>
              Logout
            </NavLink>
          </li>
        )}
        {!isAuthenticated && !loading && (
          <>
            <li>
              <NavLink to="/developers">Developers</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
