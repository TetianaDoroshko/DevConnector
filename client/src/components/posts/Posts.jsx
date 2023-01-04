import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/operations(thunks)";
import { Spinner } from "../layout/Spinner";
import { FaUser } from "react-icons/fa";
import { PostItem } from "./PostItem";
import { PostForm } from "./PostForm";

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts) || [];
  const loading = useSelector((state) => state.post.loading);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : (
    <section className="container">
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <FaUser className="icon-fas" />
        Welcome to the community
      </p>
      <PostForm />
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} showActions />
        ))}
      </div>
    </section>
  );
};

Posts.propTypes = {};
