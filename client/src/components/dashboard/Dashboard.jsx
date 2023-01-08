import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAccount, getProfile } from "../../redux/operations(thunks)";
import { Spinner } from "../layout/Spinner";
import { FaUserAlt, FaUserMinus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { DashboardActions } from "./DashboardActions";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { popUpMessage } from "../../helpers/popUpMessage";

export const Dashboard = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.profile.loading);
  const authLoading = useSelector((state) => state.auth.loading);

  const profile = useSelector((state) => state.profile.profile);
  const user = useSelector((state) => state.auth.user);

  const location = useLocation();

  useEffect(() => {
    if (!authLoading) dispatch(getProfile());
  }, [dispatch, authLoading]);

  if (loading && !profile)
    return (
      <section className="container">
        <Spinner />
      </section>
    );

  return (
    <section className="container">
      {profile ? (
        <>
          <DashboardActions />
          <Experience />
          <Education />
          <div className="my-2">
            <button
              className="btn btn-danger btn-align"
              onClick={() =>
                popUpMessage(
                  "Are you sure to remove your account? This can not be undone.",
                  () => dispatch(deleteAccount())
                )
              }
            >
              <FaUserMinus className="icon-fas" />
              Delete My Account
            </button>
          </div>
        </>
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
