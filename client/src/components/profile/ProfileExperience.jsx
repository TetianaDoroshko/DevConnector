import React from "react";
import PropTypes from "prop-types";
import ExperienceItem from "./ExperienceItem";

export const ProfileExperience = ({ profile }) => {
  return (
    <div className="profile-exp bg-white p-2">
      <h2 className="text-primary">Experience</h2>
      {profile.experience.length > 0 ? (
        profile.experience.map((exp) => (
          <ExperienceItem key={exp._id} experience={exp} />
        ))
      ) : (
        <div>No experience credentials</div>
      )}
    </div>
  );
};

ProfileExperience.propTypes = {
  profile: PropTypes.object.isRequired,
};
