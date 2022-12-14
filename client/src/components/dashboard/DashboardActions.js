import React from "react";
import { FaBlackTie, FaGraduationCap, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const DashboardActions = () => {
  return (
    <div classNameName="dash-buttons">
      <Link to="edit-profile" className="btn btn-light">
        <FaUserCircle className="icon-fas text-primary" />
        Edit Profile
      </Link>
      <Link to="add-experience" className="btn btn-light">
        <FaBlackTie className="icon-fas text-primary" />
        Add Experience
      </Link>
      <Link to="add-education" className="btn btn-light">
        <FaGraduationCap className="icon-fas text-primary" />
        Add Education
      </Link>
    </div>
  );
};
