import React from "react";
import PropTypes from "prop-types";
import { FaThumbsDown, FaThumbsUp, FaTimes } from "react-icons/fa";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deletePost,
  likePost,
  unlikePost,
} from "../../redux/operations(thunks)";

export const PostItem = ({ post = {} }) => {
  const { _id, text, name, avatar, user, likes, comments, date } = post;
  const userId = useSelector((state) => state.auth.user._id);
  const dispatch = useDispatch();
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
          <img className="round-img" src={avatar} alt={`${name}'s avatar`} />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        <div className="btn-wrap-left">
          <button
            type="button"
            className="btn btn-light btn-flex"
            onClick={() => {
              dispatch(likePost(_id));
            }}
          >
            <FaThumbsUp className="fas" />
            {likes.length > 0 && (
              <span className="like-count">{likes.length}</span>
            )}
          </button>
          <button
            type="button"
            className="btn btn-light btn-flex"
            onClick={() => {
              dispatch(unlikePost(_id));
            }}
          >
            <FaThumbsDown className="fas" />
          </button>
          <Link to={`/post/${_id}`} className="btn btn-primary btn-flex">
            Discussion
            {comments.length > 0 && (
              <span className="comment-count"> {comments.length}</span>
            )}
          </Link>
          {userId === user && (
            <button
              type="button"
              className="btn btn-danger btn-flex"
              onClick={() => {
                dispatch(deletePost(_id));
              }}
            >
              <FaTimes className="fas" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};
