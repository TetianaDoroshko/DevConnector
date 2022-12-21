import React, { useState } from "react";
import { FaCodeBranch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addExperience } from "../../redux/operations(thunks)";

export const AddExperience = () => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const onCurrentChange = () => {
    setFormData((prevState) => ({ ...prevState, current: !prevState.current }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addExperience({ formData, navigate: () => navigate("/dashboard") })
    );
  };

  return (
    <section class="container">
      <h1 class="large text-primary">Add An Experience</h1>
      <p class="lead">
        <FaCodeBranch className="icon-fa text-primary" />
        Add any developer/programming positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form class="form" onSubmit={onFormSubmit}>
        <div class="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={onChange}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div class="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              onChange={onCurrentChange}
            />{" "}
            Current Job
          </p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={onChange}
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary my-1">
          Submit
        </button>
        <Link to="/dashboard" class="btn btn-light my-1">
          Go Back
        </Link>
      </form>
    </section>
  );
};
