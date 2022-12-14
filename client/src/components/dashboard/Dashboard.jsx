import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/operations(thunks)";
import { Spinner } from "../layout/Spinner";
import { FaUserAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { DashboardActions } from "./DashboardActions";

export const Dashboard = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.profile.loading);
  const profile = useSelector((state) => state.profile.profile);
  const user = useSelector((state) => state.auth.user);

  const location = useLocation();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  if (loading && !profile)
    return (
      <section className="container">
        <Spinner />
      </section>
    );

  return (
    <section className="container">
      {profile ? (
        <DashboardActions />
      ) : (
        <div>
          <h1 className="large text-primary">Dashboard</h1>
          <p className="lead">
            Welcome <FaUserAlt /> {user && user.name}
          </p>
          <p>You have not a profile yet.</p>
          <Link
            to="/create-profile"
            state={{ from: location }}
            className="btn btn-primary my-1"
          >
            Create profile
          </Link>
        </div>
      )}
    </section>
  );
};
