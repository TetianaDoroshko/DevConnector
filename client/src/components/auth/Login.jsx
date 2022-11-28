import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/operations(thunks)";

export const Login = () => {
  const dispatch = useDispatch();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setformData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSumit = async (e) => {
    e.preventDefault();
    const newUser = { email, password };
    dispatch(login(newUser));
  };

  const { email, password } = formData;

  return (
    <main>
      <div className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Sign into Your Account
        </p>
        <form className="form" onSubmit={onFormSumit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              minLength="6"
              autoComplete="on"
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </main>
  );
};
