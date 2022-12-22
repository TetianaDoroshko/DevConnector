import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfiles } from "../../redux/operations(thunks)";
import { FaConnectdevelop } from "react-icons/fa";
import { ProfileItem } from "./ProfileItem";
import { Spinner } from "../layout/Spinner";

export const ProfilesList = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profile.profiles) ?? [];
  const loading = useSelector((state) => state.profile.loading);

  useEffect(() => {
    dispatch(getAllProfiles());
  }, [dispatch]);

  return (
    <section className="container">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <FaConnectdevelop className="fa" /> Browse and connect with
            developers
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>Any profiles wasn't found</h4>
            )}
          </div>
        </>
      )}
    </section>
  );
};
