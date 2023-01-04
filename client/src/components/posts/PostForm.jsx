import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/operations(thunks)";

export const PostForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(text));
    setText("");
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>New Post</h3>
      </div>
      <form className="form my-1" onSubmit={onFormSubmit}>
        <textarea
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          cols="30"
          rows="5"
          placeholder="Create a post"
          required
        ></textarea>
        <button type="submit" className="btn btn-dark my-1">
          Submit
        </button>
      </form>
    </div>
  );
};
