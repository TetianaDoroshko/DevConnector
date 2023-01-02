import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getGitRepos } from "../../redux/operations(thunks)/profile/getGitRepos";
import { Spinner } from "../layout/Spinner";

export const ProfileGitHub = ({ profile }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (profile.githubusername) {
      dispatch(getGitRepos(profile.githubusername));
    }
  }, [dispatch, profile.githubusername]);
  const repos = useSelector((state) => state.profile.repos);
  const loading = useSelector((state) => state.profile.loading);

  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">Github Repositories</h2>
      {loading ? (
        <Spinner />
      ) : repos ? (
        repos.map((repo) => (
          <div key={repo.id} className="repo bg-white p-1 my-1">
            <div>
              <h4>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopenere noreferrer"
                >
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div>
              <ul>
                <li key={1} className="badge badge-primary">
                  Stars: {repo.stargazers_count}
                </li>
                <li key={2} className="badge badge-dark">
                  Watchers: {repo.watchers_count}
                </li>
                <li key={3} className="badge badge-light">
                  Forks: {repo.forks_count}
                </li>
              </ul>
            </div>
          </div>
        ))
      ) : (
        <p>Repositorieas wasn't found</p>
      )}
    </div>
  );
};

ProfileGitHub.propTypes = {
  profile: PropTypes.object.isRequired,
};
