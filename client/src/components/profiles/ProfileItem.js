import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

export const ProfileItem = ({ profile }) => {
  const {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  } = profile;

  return (
    <Link to={`/profile/${_id}`}>
      <div className="profile bg-light">
        <img src={avatar} alt={`${name}'s avatar`} className="round-img" />
        <div>
          <h2>{name}</h2>
          <p>
            {status} {company && <span> at {company}</span>}
          </p>
          <p className="my-1">{location && location}</p>
        </div>
        <ul>
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className="text-primary">
              <FaCheck className="fas" /> {skill}
            </li>
          ))}
          {skills.length > 4 && (
            <li key={4} className="text-primary">
              <FaCheck className="fas" /> etc.
            </li>
          )}
        </ul>
      </div>
    </Link>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};
