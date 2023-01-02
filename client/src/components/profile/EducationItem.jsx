import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const EducationItem = ({ education }) => {
  const { school, degree, fieldofstudy, current, to, from, description } =
    education;

  return (
    <div>
      <h3 className="text-dark">{school}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
        {current ? "to now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>{fieldofstudy}</p>
      {description && (
        <p>
          <strong>Description: </strong>
          {description}
        </p>
      )}
    </div>
  );
};

EducationItem.propTypes = {
  education: PropTypes.object.isRequired,
};

export default EducationItem;
