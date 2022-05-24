import React from "react";
import { Link } from "react-router-dom";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const profilePage = true;
  return (
    <div className="profile__card">
      <div className="profile__images">
        <img src={Cover} alt={Cover} />
        <img src={Profile} alt={Profile} />
      </div>
      <div className="profile__name">
        <Link to="/profile">John Snow</Link>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className="follow__status">
        <hr />
        <div>
          <div className="follow">
            <span>1186</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>11</span>
            <span>Followings</span>
          </div>
          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {profilePage ? <br /> : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
