import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../profileModal/ProfileModal";
import { Link } from "react-router-dom";

const InfoCard = () => {
  const [profileModal, setProfileModal] = useState(false);
  return (
    <div className="info__card">
      <div className="info__head">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setProfileModal(true)}
          />

          <ProfileModal
            profileModal={profileModal}
            setProfileModal={setProfileModal}
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span> in Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives</b>
        </span>
        <span> Delhi, India</span>
      </div>
      <div className="info">
        <span>
          <b>Works at</b>
        </span>
        <span> Google</span>
      </div>
      <Link to="/" className="button logout">
        Logout
      </Link>
    </div>
  );
};

export default InfoCard;
