import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateAvatar } from "../../redux/operations(thunks)";

export const UpdateAvatar = () => {
  const [showInput, setShowInput] = useState(false);

  const user = useSelector((state) => state.profile.profile.user);
  const userId = useSelector((state) => state.auth.user._id);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const file = e.target.avatar.files[0];
    const formData = new FormData();
    formData.append("avatar", file);
    console.log(formData);
    dispatch(updateAvatar(formData));
    setShowInput(false);
  };
  return (
    <div className="dash-buttons">
      <Link to={`/profile/${userId}`}>
        <img
          className="round-img-s"
          src={user.avatar}
          alt={`${user.name}'s avatar`}
        />
      </Link>
      <button
        style={{ marginLeft: "8px" }}
        className="btn btn-light btn-align"
        onClick={() => setShowInput(!showInput)}
      >
        <FaUser className="icon-fas text-primary" />
        Update Avatar
      </button>
      {showInput && (
        <form
          encType="multipart/form-data"
          method="patch"
          className="form-avatar"
          onSubmit={onFormSubmit}
        >
          <input
            type="file"
            name="avatar"
            className="btn btn-light btn-align"
          />
          <button type="submit" className="btn btn-primary btn-align">
            Save
          </button>
        </form>
      )}
    </div>
  );
};
