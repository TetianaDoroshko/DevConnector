import React from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

export const ProfileAbout = ({ profile }) => {
  const { bio, user, skills } = profile;
  return (
    <div className="profile-about bg-light p-2">
      {bio && (
        <>
          <h2 className="text-primary">{user.name}'s Bio</h2>
          <p>{bio}</p>
        </>
      )}

      <div className="line"></div>
      <h2 className="text-primary">Skill Set</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="p-1">
            <FaCheck /> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};
