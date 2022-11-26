import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Login = () => {
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
    try {
      console.log(newUser);
      const res = await axios.post("/api/users", newUser);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
      // TODO!!! Warning alert
    }
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
