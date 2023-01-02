import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ExperienceItem = ({ experience }) => {
  const { company, title, location, current, to, from, description } =
    experience;

  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>{location}</p>
      <p>
        <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
        {current ? "to now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
      </p>
      <p>
        <strong>Position: </strong>
        {title}
      </p>
      {description && (
        <p>
          <strong>Description: </strong>
          {description}
        </p>
      )}
    </div>
  );
};

ExperienceItem.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ExperienceItem;
