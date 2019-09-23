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
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className='smIcon'
          src={icon}
          alt="social profile"
          
        />
      </a>
    </div>
  );
}

function SocialProfiles() {
  return (
    <div id="contact">
      <div className="contact-container">
        <h1>Contact</h1>
        <img src={profile} alt="profile-pic" className="profile-pic" />
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
