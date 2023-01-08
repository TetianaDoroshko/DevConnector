import React from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { deleteEducation } from "../../redux/operations(thunks)";
import { popUpMessage } from "../../helpers/popUpMessage";

export const Education = () => {
  const education = useSelector((state) => state.profile.profile.education);
  const dispatch = useDispatch();

  const educationMarkup = [...education]
    .sort((a, b) => new Date(b.from) - new Date(a.from))
    .map((edu) => (
      <tr key={edu._id}>
        <td className="hide-sm">{edu.school}</td>
        <td className="hide-sm">{edu.degree}</td>
        <td className="hide-sm">
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{" "}
          {edu.current === true ? (
            "to now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() =>
              popUpMessage("Are you sure to remove an education?", () =>
                dispatch(deleteEducation(edu._id))
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
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
          </tr>
        </thead>
        <tbody>{educationMarkup}</tbody>
      </table>
    </>
  );
};
