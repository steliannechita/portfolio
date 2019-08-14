import React from "react";
import SOCIAL_PORFILES from "../../data/socialProfiles";
import "./SocialProfiles.css";
import profile from "../../assets/profile_pic.jpg";

function Profile(props) {
  const { link, icon } = props.profile;
  return (
    <div
      style={{
        display: "inline-block",
        margin: 15
      }}
    >
      <a href={link} target="_blank">
        <img
          src={icon}
          alt="social profile"
          style={{ width: 35, height: 38 }}
        />
      </a>
    </div>
  );
}

function SocialProfiles() {
  return (
    <div>
      <div className="section-image-contact" />
      <div className="contact-container" id="contact">
        <h1>Contact</h1>
        <img src={profile} alt="profile-pic" className="profile" />
        <h2>Get in touch!</h2>
        <div>
          {SOCIAL_PORFILES.map(profile => {
            return <Profile key={profile.id} profile={profile} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SocialProfiles;
