import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const studentProfile = () => {
  return (
    <div className="profile-container">
      <div className="banner"></div>
      <div className="profile-info">
        <div className="avatar">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <h2>Ronald Weasley</h2>
        <div className="social-icons">
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>

      <div className="details">
        <div className="left">
          <p><strong>Username</strong><br />@scabbersonTop</p>
          <p><strong>Phone Number</strong><br />0123456789</p>
          <p><strong>Tech Stack</strong><br />UI Design | Frontend</p>
        </div>
        <div className="right">
          <p><strong>Registration Number</strong><br />23BXX0123</p>
          <p><strong>CGPA</strong><br />00.00</p>
          <p><strong>Year of Study</strong><br />nth Year</p>
        </div>
      </div>

      <div className="about">
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum diam auctor, tincidunt mi nec, suscipit risus...</p>
      </div>

      <button className="edit-profile">EDIT PROFILE</button>
    </div>
  );
};

export default studentProfile;
