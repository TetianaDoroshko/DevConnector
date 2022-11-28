import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../../redux/operations(thunks)";

export const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return <div>Dashboard</div>;
};
