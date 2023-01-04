import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../redux/operations(thunks)";
import { Spinner } from "../layout/Spinner";
import { PostItem } from "../posts/PostItem";

export const Post = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector((state) => state.post.post) || {};
  const loading = useSelector((state) => state.post.loading);

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  return (
    <section className="container">
      {loading ? <Spinner /> : <PostItem post={post} showActions={false} />}
    </section>
  );
};
