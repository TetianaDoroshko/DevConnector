import React, { useEffect } from "react";
import { Spinner } from "../layout/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getProfileById } from "../../redux/operations(thunks)/profile/getProfileById";
import { Link, useParams } from "react-router-dom";
import { ProfileTop } from "./ProfileTop";
import { ProfileAbout } from "./ProfileAbout";
import { ProfileExperience } from "./ProfileExperience";
import { ProfileEducation } from "./ProfileEducation";
import { ProfileGitHub } from "./ProfileGitHub";

export const Profile = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const profile = useSelector((state) => state.profile.profile);
  const loading = useSelector((state) => state.profile.loading);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProfileById(userId));
  }, [dispatch, userId]);

  return (
    <section className="container">
      {loading && <Spinner />}
      {profile && (
        <>
          <Link to="/profiles" className="btn btn-light">
            Back to Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-light">
                Edit Profile
              </Link>
            )}
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <ProfileEducation profile={profile} />
            <ProfileExperience profile={profile} />
            <ProfileGitHub profile={profile} />
          </div>
        </>
      )}
    </section>
  );
};
