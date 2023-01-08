import React from "react";
import { FaBlackTie, FaGraduationCap, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UpdateAvatar } from "./UpdateAvatar";

export const DashboardActions = () => {
  return (
    <>
      <UpdateAvatar />
      <div className="dash-buttons">
        <Link to="/edit-profile" className="btn btn-light btn-align">
          <FaUserCircle className="icon-fas text-primary" />
          Edit Profile
        </Link>
        <Link to="/add-experience" className="btn btn-light btn-align">
          <FaBlackTie className="icon-fas text-primary" />
          Add Experience
        </Link>
        <Link to="/add-education" className="btn btn-light btn-align">
          <FaGraduationCap className="icon-fas text-primary" />
          Add Education
        </Link>
      </div>
    </>
  );
};
