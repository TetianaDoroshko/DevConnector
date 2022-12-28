import React from "react";
import PropTypes from "prop-types";
import {
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const ProfileTop = ({ profile }) => {
  const {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  } = profile;
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt={`${name}'s avatar`} />
      <h1 className="large">{name}</h1>
      <p className="lead">
        {status}
        {company && <span> at {company}</span>}
      </p>
      <p>{location}</p>
      <div className="icons my-1">
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <FaGlobe className="fab fa-globe" />
          </a>
        )}
        {social?.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="fab fa-twitter" />
          </a>
        )}
        {social?.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="fab fa-facebook" />
          </a>
        )}
        {social?.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="fab fa-linkedin " />
          </a>
        )}
        {social?.youtube && (
          <a href={social.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube className="fab fa-youtube " />
          </a>
        )}
        {social?.instagram && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="fab fa-instagram" />
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};
