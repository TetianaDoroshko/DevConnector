import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export const NotFoundPage = () => {
  return (
    <section className="container">
      <h1 className="large text-primary">
        <FaExclamationTriangle /> Page Not Found
      </h1>
      <p className="lead"> Sorry, this page does not exist</p>
    </section>
  );
};
