import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useAlert } from "../../helpers/alerts";
import { register } from "../../redux/operations(thunks)";

export const Register = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const onChange = (e) => {
    setformData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSumit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Passwords don't match", "danger");
      return;
    }
    const newUser = { name, email, password };
    dispatch(register(newUser));
  };

  const { name, email, password, password2 } = formData;

  return (
    <main>
      <div className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form className="form" onSubmit={onFormSumit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
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
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={onChange}
              minLength="6"
              autoComplete="on"
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </main>
  );
};
