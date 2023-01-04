import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { FaTimes } from "react-icons/fa";
import { deleteComment } from "../../redux/operations(thunks)";

export const CommentItem = ({ comment, postId }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user._id);

  const { _id, text, name, avatar, user, date } = comment;

  return (
    <div className="comment bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt={`${name}'s avatar`} />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        {user === userId && (
          <button
            type="button"
            className="btn btn-danger btn-flex"
            onClick={() => {
              dispatch(deleteComment({ postId, commentId: _id }));
            }}
          >
            <FaTimes className="fas" />
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object,
  postId: PropTypes.string.isRequired,
};
