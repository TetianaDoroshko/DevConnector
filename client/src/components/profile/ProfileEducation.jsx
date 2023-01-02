import React from "react";
import PropTypes from "prop-types";
import EducationItem from "./EducationItem";

export const ProfileEducation = ({ profile }) => {
  return (
    <div className="profile-edu bg-white p-2">
      <h2 className="text-primary">Education</h2>
      {profile.education.length > 0 ? (
        profile.education.map((edu) => (
          <EducationItem key={edu._id} education={edu} />
        ))
      ) : (
        <div>No education credentials</div>
      )}
    </div>
  );
};

ProfileEducation.propTypes = {
  profile: PropTypes.object.isRequired,
};
