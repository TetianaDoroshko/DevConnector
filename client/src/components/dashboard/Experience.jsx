import React from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { popUpMessage } from "../../helpers/popUpMessage";
import { deleteExperience } from "../../redux/operations(thunks)";

export const Experience = () => {
  const experience = useSelector((state) => state.profile.profile.experience);
  const dispatch = useDispatch();

  const experienceMarkup = [...experience]
    .sort((a, b) => new Date(b.from) - new Date(a.from))
    .map((exp) => (
      <tr key={exp._id}>
        <td className="hide-sm">{exp.company}</td>
        <td className="hide-sm">{exp.title}</td>
        <td className="hide-sm">
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
          {exp.current === true ? (
            "to now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() =>
              popUpMessage("Are you sure to remove an experience?", () =>
                dispatch(deleteExperience(exp._id))
              )
            }
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  return (
    <>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
          </tr>
        </thead>
        <tbody>{experienceMarkup}</tbody>
      </table>
    </>
  );
};
