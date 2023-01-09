import React from "react";
import PropTypes from "prop-types";

export const Alert = ({ alerts }) => {
  const alertMarkup = alerts.map((alert) => (
    <div
      key={alert.id}
      className={`alert alert-${alert.type ? alert.type : "light"}`}
    >
      {alert.message}
    </div>
  ));

  return (
    <div
      className="container alert"
      style={{ height: "80px", marginTop: "10px", marginBottom: "0" }}
    >
      {alerts && alertMarkup}
    </div>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};
