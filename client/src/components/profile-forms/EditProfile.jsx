import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "../../helpers/alerts";
import { getProfile } from "../../redux/operations(thunks)";
import { addProfile } from "../../redux/operations(thunks)/profile/addProfile";

export const EditProfile = () => {
  const profile = useSelector((state) => state.profile.profile);
  const loading = useSelector((state) => state.profile.loading);
  const authLoading = useSelector((state) => state.auth.loading);

  const navigate = useNavigate();

  const [formData, setFormData] = useState(profile);
  const [showSocialInputs, setshowSocialInputs] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!authLoading) dispatch(getProfile());
  // }, [dispatch, authLoading]);

  const alert = useAlert();

  if (!profile) {
    alert("danger", "You haven't created a profile yet");
    return navigate("/create-profile");
  }

  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProfile({
        formData,
        edit: true,
        navigate: () => navigate("/dashboard"),
      })
    );
  };

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  return (
    !loading && (
      <section className="container">
        <h1 className="large text-primary">Edit Your Profile</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Let's get some information to make
          your profile stand out
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={onFormSubmit}>
          <div className="form-group">
            <select name="status" value={status} onChange={onInputChange}>
              <option value="0" disabled>
                * Select Professional Status
              </option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <small className="form-text">
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Company"
              name="company"
              value={company}
              onChange={onInputChange}
            />
            <small className="form-text">
              Could be your own company or one you work for
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Website"
              name="website"
              value={website}
              onChange={onInputChange}
            />
            <small className="form-text">
              Could be your own or a company website
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={onInputChange}
            />
            <small className="form-text">City</small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Skills"
              name="skills"
              value={skills}
              onChange={onInputChange}
            />
            <small className="form-text">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Github Username"
              name="githubusername"
              value={githubusername}
              onChange={onInputChange}
            />
            <small className="form-text">
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <div className="form-group">
            <textarea
              placeholder="A short bio of yourself"
              name="bio"
              value={bio}
              onChange={onInputChange}
              style={{ fontFamily: "inherit" }}
            ></textarea>
            <small className="form-text">Tell us a little about yourself</small>
          </div>

          <div className="my-2">
            <button
              type="button"
              onClick={() => setshowSocialInputs((prevSt) => !prevSt)}
              className="btn btn-light"
            >
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>
          {showSocialInputs && (
            <>
              <div className="form-group social-input">
                <FaTwitter className="icon-fa fa-twitter" />
                <input
                  type="text"
                  placeholder="Twitter URL"
                  name="twitter"
                  value={twitter}
                  onChange={onInputChange}
                />
              </div>

              <div className="form-group social-input">
                <FaFacebook className="icon-fa fa-facebook" />
                <input
                  type="text"
                  placeholder="Facebook URL"
                  name="facebook"
                  value={facebook}
                  onChange={onInputChange}
                />
              </div>

              <div className="form-group social-input">
                <FaYoutube className="icon-fa fa-youtube" />
                <input
                  type="text"
                  placeholder="YouTube URL"
                  name="youtube"
                  value={youtube}
                  onChange={onInputChange}
                />
              </div>

              <div className="form-group social-input">
                <FaLinkedin className="icon-fa fa-linkedin" />
                <input
                  type="text"
                  placeholder="Linkedin URL"
                  name="linkedin"
                  value={linkedin}
                  onChange={onInputChange}
                />
              </div>

              <div className="form-group social-input">
                <FaInstagram className="icon-fa fa-instagram" />
                <input
                  type="text"
                  placeholder="Instagram URL"
                  name="instagram"
                  value={instagram}
                  onChange={onInputChange}
                />
              </div>
            </>
          )}

          <button type="submit" className="btn btn-primary my-1">
            Send
          </button>
          <Link className="btn btn-light my-1" to={"/dashboard"}>
            Go Back
          </Link>
        </form>
      </section>
    )
  );
};
