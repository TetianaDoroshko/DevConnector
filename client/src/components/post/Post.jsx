import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../../redux/operations(thunks)";
import { Spinner } from "../layout/Spinner";
import { PostItem } from "../posts/PostItem";
import { CommentForm } from "./CommentForm";
import { CommentItem } from "./CommentItem";

export const Post = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector((state) => state.post.post) || {};
  const loading = useSelector((state) => state.post.loading);
  const authLoading = useSelector((state) => state.auth.user.loading);

  useEffect(() => {
    if (!authLoading) dispatch(getPost(postId));
  }, [dispatch, postId, authLoading]);

  return (
    <section className="container">
      {loading ? (
        <Spinner />
      ) : post.comments?.length > 0 ? (
        <>
          <Link to="/posts" className="btn btn-light">
            Back to Posts
          </Link>
          <PostItem post={post} showActions={false} />
          <CommentForm />
          <div className="comments">
            {post.comments.map((comment) => (
              <CommentItem
                key={comment._id}
                comment={comment}
                postId={postId}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <CommentForm />
          <div>There aren't comments yet</div>
        </>
      )}
    </section>
  );
};
